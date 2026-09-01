import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  noIndex?: boolean;
}

const BASE_URL = 'https://aisyncsoftware.in';

export const usePageSEO = ({
  title,
  description,
  canonicalPath = '',
  noIndex = false,
}: SEOProps) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Primary Meta Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Robots Directive
    const robotsContent = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('meta[name="robots"]', 'name', 'robots', robotsContent);

    // Canonical URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullCanonicalUrl = canonicalPath === '' || canonicalPath === '/' 
      ? `${BASE_URL}/` 
      : `${BASE_URL}${cleanPath}`;
    setLinkTag('canonical', fullCanonicalUrl);

    // Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonicalUrl);

    // Twitter Card Tags
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [title, description, canonicalPath, noIndex]);
};
