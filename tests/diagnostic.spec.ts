import { test, expect } from '@playwright/test';

test('Diagnose live production website rendering', async ({ page }) => {
  const consoleLogs: string[] = [];
  const errors: string[] = [];

  page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => errors.push(err.message));
  page.on('requestfailed', req => errors.push(`Request failed: ${req.url()} - ${req.failure()?.errorText}`));

  console.log('Navigating to live production site: https://aisyncsoftware.in/');
  const startTime = Date.now();
  const response = await page.goto('https://aisyncsoftware.in/', { waitUntil: 'load', timeout: 30000 });
  const loadTime = Date.now() - startTime;

  console.log(`Response status: ${response?.status()}, Load time: ${loadTime}ms`);

  // Check section visibility
  const heroHeading = page.getByRole('heading', { name: /Software and digital systems/i });
  const servicesHeading = page.getByRole('heading', { name: /We use technology to make businesses work better/i });
  const seeItInActionHeading = page.getByRole('heading', { name: /See It In Action/i });
  const solutionsBuiltHeading = page.getByRole('heading', { name: /Solutions We've Built/i });
  const methodologyHeading = page.getByRole('heading', { name: /How We Deliver Solutions/i });
  const believeHeading = page.getByRole('heading', { name: /What We Believe/i });
  const faqHeading = page.getByRole('heading', { name: /Questions Business Owners Ask/i });

  console.log('Checking sections visibility before scroll...');
  console.log('Hero visible:', await heroHeading.isVisible());
  console.log('Services visible:', await servicesHeading.isVisible());
  console.log('See It In Action visible:', await seeItInActionHeading.isVisible());
  console.log('Solutions Built visible:', await solutionsBuiltHeading.isVisible());
  console.log('Methodology visible:', await methodologyHeading.isVisible());
  console.log('What We Believe visible:', await believeHeading.isVisible());
  console.log('FAQ visible:', await faqHeading.isVisible());

  // Check opacity of elements
  const seeItInActionParentOpacity = await seeItInActionHeading.evaluate(el => {
    let curr: HTMLElement | null = el as HTMLElement;
    const styles: { tag: string; opacity: string; transform: string; display: string }[] = [];
    while (curr && curr !== document.body) {
      const s = window.getComputedStyle(curr);
      styles.push({ tag: curr.tagName, opacity: s.opacity, transform: s.transform, display: s.display });
      curr = curr.parentElement;
    }
    return styles;
  });
  console.log('See It In Action computed styles hierarchy:', JSON.stringify(seeItInActionParentOpacity));

  // Check CaseStudyGrid chapters
  const caseStudies = await page.evaluate(() => {
    const chapters = Array.from(document.querySelectorAll('section, [class*="rounded-3xl"], [class*="rounded-2xl"]'));
    return chapters.map(c => ({
      text: c.textContent?.slice(0, 50),
      opacity: window.getComputedStyle(c).opacity,
      visibility: window.getComputedStyle(c).visibility
    })).filter(c => c.text?.includes('Bhavani') || c.text?.includes('AORR'));
  });
  console.log('Case studies styles:', JSON.stringify(caseStudies));

  // Now scroll down
  console.log('Scrolling to See It In Action...');
  await seeItInActionHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  console.log('See It In Action visible after scroll:', await seeItInActionHeading.isVisible());

  console.log('Console logs:', consoleLogs);
  console.log('Errors:', errors);
});
