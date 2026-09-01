/**
 * AIsync Software Solutions — Bulletproof Website Lead Capture API
 * 
 * FIX EXPLANATION:
 * The previous script failed because when browsers send form data using fetch / URLSearchParams,
 * Google Apps Script's e.postData.contents contains URL-encoded text (name=Alex&email=alex@...), 
 * causing JSON.parse() to throw an error and e.parameter to sometimes be empty.
 * 
 * This updated script handles JSON, URL-Encoded, e.parameter, AND fallback query params seamlessly.
 */

const CONFIG = {
  SHEET_ID: "1wGwjlWVtY-Y3goFxIgJwAPpa3cQe5e5E2Q9JPYnl6mM",
  SHEET_NAME: "Leads",
  ADMIN_EMAIL: "aisync07@gmail.com",
  BUSINESS_NAME: "AIsync Software Solutions",
  WEBSITE_URL: "https://aisyncsoftware.in"
};

/**
 * Handles POST requests from the website.
 */
function doPost(e) {
  try {
    // --------------------------------------------------
    // 1. Bulletproof Data Extraction
    // --------------------------------------------------
    var data = {};

    // First check e.parameter (populated by Apps Script for standard forms)
    if (e && e.parameter && Object.keys(e.parameter).length > 0) {
      data = e.parameter;
    }

    // Next check e.postData.contents
    if (e && e.postData && e.postData.contents) {
      var contents = e.postData.contents;
      try {
        // Try parsing JSON payload
        var jsonParsed = JSON.parse(contents);
        for (var key in jsonParsed) {
          data[key] = jsonParsed[key];
        }
      } catch (jsonErr) {
        // If not JSON, parse URL-encoded string (e.g. name=Alex&email=alex%40gmail.com)
        var pairs = contents.split('&');
        for (var i = 0; i < pairs.length; i++) {
          var pair = pairs[i].split('=');
          if (pair.length === 2) {
            var k = decodeURIComponent(pair[0].replace(/\+/g, ' '));
            var v = decodeURIComponent(pair[1].replace(/\+/g, ' '));
            data[k] = v;
          }
        }
      }
    }

    // --------------------------------------------------
    // 2. Honeypot Anti-Spam Check
    // --------------------------------------------------
    if (data.website && String(data.website).trim() !== "") {
      return jsonResponse({
        success: true,
        leadId: "SPAM_BLOCKED",
        message: "Request processed."
      });
    }

    // --------------------------------------------------
    // 3. Clean & Normalize All Field Variations
    // --------------------------------------------------
    const name = cleanText(data.name || data.fullName || data.clientName);
    const email = cleanEmail(data.email || data.workEmail || data.clientEmail);
    const company = cleanText(data.company || data.organization || "Not Specified");
    const service = cleanText(data.serviceScope || data.service || data.serviceRequired || "General Inquiry");
    const message = cleanText(data.message || data.projectDetails || data.requirement || data.brief);

    // --------------------------------------------------
    // 4. Validate Required Fields
    // --------------------------------------------------
    if (!name) {
      return jsonResponse({
        success: false,
        message: "Name is required."
      });
    }

    if (!email || !isValidEmail(email)) {
      return jsonResponse({
        success: false,
        message: "A valid email address is required."
      });
    }

    if (!service) {
      return jsonResponse({
        success: false,
        message: "Please select a service."
      });
    }

    if (!message) {
      return jsonResponse({
        success: false,
        message: "Please provide some information about your requirement."
      });
    }

    // --------------------------------------------------
    // 5. Generate Unique Lead ID & Timestamp
    // --------------------------------------------------
    const leadId = generateLeadId();
    const timestamp = new Date();

    // --------------------------------------------------
    // 6. Save to Google Sheet (With Lock Protection)
    // --------------------------------------------------
    var spreadsheet;
    if (CONFIG.SHEET_ID && CONFIG.SHEET_ID !== "YOUR_SHEET_ID_HERE") {
      spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    } else {
      spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    }

    var sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME) || spreadsheet.getActiveSheet();

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      sheet.appendRow([
        timestamp,
        leadId,
        name,
        email,
        company,
        service,
        message,
        "New"
      ]);
    } finally {
      lock.releaseLock();
    }

    // --------------------------------------------------
    // 7. Send Internal Admin Notification (Graceful)
    // --------------------------------------------------
    try {
      sendAdminNotification({
        leadId: leadId,
        timestamp: timestamp,
        name: name,
        email: email,
        company: company,
        service: service,
        message: message
      });
    } catch (adminErr) {
      console.error("Admin Email Error:", adminErr);
    }

    // --------------------------------------------------
    // 8. Send Thank-You Email to Client (Graceful)
    // --------------------------------------------------
    try {
      sendClientThankYou({
        leadId: leadId,
        name: name,
        email: email,
        company: company,
        service: service,
        message: message
      });
    } catch (clientErr) {
      console.error("Client Email Error:", clientErr);
    }

    // --------------------------------------------------
    // 9. Return Success Response
    // --------------------------------------------------
    return jsonResponse({
      success: true,
      result: "success",
      leadId: leadId,
      message: "Your enquiry has been received."
    });

  } catch (error) {
    console.error("Critical doPost Error:", error);
    return jsonResponse({
      success: false,
      message: "Unable to process your enquiry.",
      error: String(error.message || error)
    });
  }
}

/**
 * Handles GET requests (for browser testing in URL bar)
 */
function doGet(e) {
  return jsonResponse({
    success: true,
    message: "AIsync Software Lead Capture API is live and operational."
  });
}

/**
 * Sends notification email to AIsync Admin
 */
function sendAdminNotification(lead) {
  const subject = "New Website Enquiry — " + lead.name + " — " + lead.service;

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#222;line-height:1.6;">
      <h2 style="margin-bottom:5px;color:#4f46e5;">New Website Enquiry Received</h2>
      <p style="color:#666;font-size:14px;">A new lead has been submitted through the AIsync website.</p>
      <hr style="border:none;border-top:1px solid #eee;">
      
      <table cellpadding="8" cellspacing="0" width="100%" style="border-collapse:collapse;font-size:14px;">
        <tr><td width="140"><strong>Lead ID</strong></td><td style="font-family:monospace;font-weight:bold;color:#4f46e5;">${escapeHtml(lead.leadId)}</td></tr>
        <tr><td><strong>Name</strong></td><td>${escapeHtml(lead.name)}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(lead.email)}" style="color:#4f46e5;font-weight:bold;">${escapeHtml(lead.email)}</a></td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(lead.company || "Not provided")}</td></tr>
        <tr><td><strong>Service Scope</strong></td><td><span style="background:#eef2ff;color:#4f46e5;padding:3px 8px;border-radius:4px;font-weight:bold;">${escapeHtml(lead.service)}</span></td></tr>
      </table>

      <hr style="border:none;border-top:1px solid #eee;">
      <h3 style="font-size:15px;">Project Brief / Requirement:</h3>
      <div style="background:#f6f6f6;padding:16px;border-radius:8px;white-space:pre-wrap;font-size:14px;">
        ${escapeHtml(lead.message)}
      </div>

      <div style="margin-top:20px;text-align:center;">
        <a href="mailto:${escapeHtml(lead.email)}?subject=Re: Enquiry ${escapeHtml(lead.leadId)} — AIsync Software Solutions" style="display:inline-block;background:#4f46e5;color:#fff;padding:12px 24px;border-radius:6px;font-weight:bold;text-decoration:none;">Reply Directly to Client →</a>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Sends confirmation thank-you email to Client
 */
function sendClientThankYou(lead) {
  const subject = "We've received your enquiry — " + CONFIG.BUSINESS_NAME;

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#222;line-height:1.6;">
      <div style="padding:24px 0;border-bottom:1px solid #e5e5e5;">
        <h2 style="margin:0;font-size:22px;color:#18181b;">${CONFIG.BUSINESS_NAME}</h2>
      </div>

      <div style="padding:30px 0;">
        <h2>Thanks, ${escapeHtml(lead.name)}.</h2>
        <p>We've received your project briefing and logged it into our engineering review queue.</p>

        <div style="background:#f7f7f7;border-radius:10px;padding:20px;margin:25px 0;">
          <p style="margin-top:0;"><strong>Summary of Your Brief</strong></p>
          <p><strong>Service Scope:</strong><br>${escapeHtml(lead.service)}</p>
          ${lead.company ? `<p><strong>Company:</strong><br>${escapeHtml(lead.company)}</p>` : ""}
          <p style="margin-bottom:0;"><strong>Your Message:</strong><br>${escapeHtml(lead.message)}</p>
        </div>

        <p>Your reference number is:</p>
        <p style="font-size:18px;font-weight:bold;letter-spacing:1px;color:#4f46e5;font-family:monospace;">
          ${escapeHtml(lead.leadId)}
        </p>

        <p>Our technical team will review your requirements and follow up with you directly.</p>
        <p>If you need to add any additional files or project documentation, simply reply directly to this email.</p>
      </div>

      <div style="padding:20px 0;border-top:1px solid #e5e5e5;color:#777;font-size:13px;">
        <p><strong>${CONFIG.BUSINESS_NAME}</strong></p>
        <p>Elite Software Engineering & Enterprise Digital Systems</p>
        <p><a href="${CONFIG.WEBSITE_URL}" style="color:#4f46e5;text-decoration:none;">${CONFIG.WEBSITE_URL}</a></p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: lead.email,
    subject: subject,
    htmlBody: htmlBody
  });
}

/**
 * Clean general text input
 */
function cleanText(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim().replace(/\s+/g, " ").substring(0, 5000);
}

/**
 * Clean email input
 */
function cleanEmail(value) {
  if (!value) return "";
  return String(value).trim().toLowerCase().substring(0, 254);
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Generate unique Lead ID
 */
function generateLeadId() {
  const date = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd");
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return "AIS-" + date + "-" + random;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Create JSON output with CORS headers
 */
function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
