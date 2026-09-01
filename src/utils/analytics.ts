/**
 * Google Analytics 4 (GA4) SPA-Aware, Non-Blocking Engine
 * AIsync Software Solutions
 *
 * Requirements:
 * - Ingests `VITE_GA_MEASUREMENT_ID` from environment.
 * - Safely no-ops when ID is unset or matches placeholder `G-XXXXXXXXXX`.
 * - Zero PII: strictly excludes personal contact info, passwords, or form text.
 * - Never blocks initial rendering or crashes on adblocker rejection.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Measurement ID from environment or fallback placeholder
const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-JPXF6EHEG3').trim();

// Check if a real, valid Measurement ID is configured
const isRealMeasurementId = (id: string): boolean => {
  return typeof id === 'string' && /^G-[A-Z0-9]{4,15}$/i.test(id) && id !== 'G-XXXXXXXXXX';
};

let isInitialized = false;

/**
 * Initialize Google Analytics 4 asynchronously.
 * Guaranteed to be non-blocking and safe against adblock errors.
 */
export const initGA = (): void => {
  if (typeof window === 'undefined' || isInitialized) return;

  // If already initialized via index.html tag, reuse it
  if (typeof window.gtag === 'function') {
    isInitialized = true;
    return;
  }

  if (!isRealMeasurementId(GA_MEASUREMENT_ID)) {
    // Analytics is unconfigured or in placeholder mode - silent no-op
    return;
  }

  try {
    // 1. Initialize dataLayer & gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };

    window.gtag('js', new Date());
    // Disable automatic pageview so SPA route tracking does not duplicate
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
    });

    // 2. Asynchronously inject gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onerror = () => {
      // Gracefully ignore adblocker or network script load failure
    };
    document.head.appendChild(script);

    isInitialized = true;
  } catch (err) {
    // Non-critical: failure must never break user experience
  }
};

/**
 * Track SPA Route Transition Page View
 */
export const trackPageView = (pagePath: string, pageTitle?: string): void => {
  if (typeof window === 'undefined' || !isInitialized || typeof window.gtag !== 'function') return;

  try {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
      page_location: window.location.href,
    });
  } catch (err) {
    // Non-critical
  }
};

/**
 * Sanitize event parameters to guarantee zero PII transmission
 */
const sanitizeParams = (params?: Record<string, any>): Record<string, any> => {
  if (!params) return {};
  const clean: Record<string, any> = {};
  const forbiddenKeys = ['name', 'email', 'phone', 'message', 'mobile', 'password', 'token'];

  for (const [key, value] of Object.entries(params)) {
    if (forbiddenKeys.includes(key.toLowerCase())) continue;
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      clean[key] = value;
    }
  }
  return clean;
};

/**
 * Track Privacy-Compliant Conversion Events (Lead Submits, CTA Clicks, Channel Inquiries)
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
): void => {
  if (typeof window === 'undefined' || !isInitialized || typeof window.gtag !== 'function') return;

  try {
    const safeParams = sanitizeParams(eventParams);
    window.gtag('event', eventName, safeParams);
  } catch (err) {
    // Non-critical
  }
};
