import { test, expect } from '@playwright/test';

test.describe('Slow Network Rendering Diagnostics', () => {
  test('Inspect section rendering under Slow 3G throttling', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'CDP session is only available in Chromium');
    const client = await page.context().newCDPSession(page);

    // Emulate Slow 3G: 400ms latency, 400kbps download, 400kbps upload
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 400,
      downloadThroughput: (400 * 1024) / 8,
      uploadThroughput: (400 * 1024) / 8,
      connectionType: 'cellular3g',
    });

    console.log('Navigating under Slow 3G to https://aisyncsoftware.in/ ...');
    const navStart = Date.now();
    await page.goto('https://aisyncsoftware.in/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    console.log(`DOM Content Loaded in ${Date.now() - navStart}ms`);

    // Check Hero immediately
    const heroTitle = page.locator('h1');
    const heroOpacity = await heroTitle.evaluate(el => window.getComputedStyle(el).opacity);
    console.log(`Hero H1 opacity right after DOMContentLoaded: ${heroOpacity}`);

    // Inspect all major sections below hero
    const inspectSection = async (name: string, selector: string) => {
      const loc = page.locator(selector).first();
      const count = await loc.count();
      if (count === 0) return { name, exists: false };
      const data = await loc.evaluate(el => {
        let node: HTMLElement | null = el as HTMLElement;
        let effectiveOpacity = 1;
        let hiddenByZeroOpacity = false;
        let current: HTMLElement | null = node;
        while (current && current !== document.body) {
          const op = parseFloat(window.getComputedStyle(current).opacity);
          effectiveOpacity *= op;
          if (op === 0) hiddenByZeroOpacity = true;
          current = current.parentElement;
        }
        const rect = node.getBoundingClientRect();
        return {
          exists: true,
          text: node.textContent?.trim().slice(0, 60),
          effectiveOpacity,
          hiddenByZeroOpacity,
          top: rect.top,
          height: rect.height,
        };
      });
      return { name, ...data };
    };

    console.log('\n--- Status Before Scroll (Immediate) ---');
    console.log(await inspectSection('ServicesOverview', 'section:has-text("Comprehensive Business Solutions")'));
    console.log(await inspectSection('SeeItInAction Header', 'section:has-text("Real-World Product Showcase") div[class*="border-b"]'));
    console.log(await inspectSection('SeeItInAction Chassis 1', 'section:has-text("Real-World Product Showcase") .grid > div:nth-child(1)'));
    console.log(await inspectSection('Selected Work (CaseStudy 1)', 'section:has-text("Solutions We\'ve Built") .space-y-16 > div:nth-child(1)'));
    console.log(await inspectSection('Selected Work (CaseStudy 2)', 'section:has-text("Solutions We\'ve Built") .space-y-16 > div:nth-child(2)'));
    console.log(await inspectSection('Execution Methodology', 'section:has-text("How We Deliver Solutions")'));
    console.log(await inspectSection('Business FAQ', 'section:has-text("Questions Business Owners Ask")'));

    // Now simulate user scrolling down slowly
    console.log('\n--- Scrolling down to 1000px ---');
    await page.evaluate(() => window.scrollTo({ top: 1000, behavior: 'smooth' }));
    await page.waitForTimeout(2000);
    console.log(await inspectSection('SeeItInAction Header', 'section:has-text("Real-World Product Showcase") div[class*="border-b"]'));

    console.log('\n--- Scrolling down to 2500px ---');
    await page.evaluate(() => window.scrollTo({ top: 2500, behavior: 'smooth' }));
    await page.waitForTimeout(2000);
    console.log(await inspectSection('Selected Work (CaseStudy 1)', 'section:has-text("Solutions We\'ve Built") .space-y-16 > div:nth-child(1)'));
    console.log(await inspectSection('Selected Work (CaseStudy 2)', 'section:has-text("Solutions We\'ve Built") .space-y-16 > div:nth-child(2)'));
  });
});
