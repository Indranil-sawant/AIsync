/**
 * Production Lead System Configuration for AIsync Software Solutions
 */

export const LEAD_CONFIG = {
  // Live Production Google Apps Script Web App Endpoint URL (Updated)
  APPS_SCRIPT_URL: import.meta.env.VITE_LEAD_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbz19kp5Lw-yRca2pOquYLLAVHK4Yn8XLPGT2zc-TKgnDP0ZB5WBPhrmT1uFP8EPWi6oTw/exec",
  
  // Service Options mapping for human-friendly frontend display
  SERVICES: [
    {
      id: 'website-development',
      label: 'Website Development',
      description: 'High-performance corporate, marketing, or portfolio platforms.',
      icon: 'Globe'
    },
    {
      id: 'application-development',
      label: 'Application Development',
      description: 'Custom web apps, customer portals, or SaaS platforms.',
      icon: 'Code2'
    },
    {
      id: 'business-automation',
      label: 'Business Automation',
      description: 'Streamlining workflows, APIs, and operational tools.',
      icon: 'Cpu'
    },
    {
      id: 'digital-transformation',
      label: 'Digital Transformation',
      description: 'Modernizing legacy software and business infrastructure.',
      icon: 'Zap'
    },
    {
      id: 'digital-marketing',
      label: 'Digital Marketing & Growth',
      description: 'SEO search architecture and conversion lead engines.',
      icon: 'TrendingUp'
    },
    {
      id: 'technology-consulting',
      label: 'Technology Consulting',
      description: 'Architecture review, security, and technical roadmap.',
      icon: 'Compass'
    },
    {
      id: 'custom-solutions',
      label: 'Custom Solutions',
      description: 'Tailored software engineered for unique business problems.',
      icon: 'Sparkles'
    }
  ]
};
