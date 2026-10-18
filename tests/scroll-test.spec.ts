import { test, expect } from '@playwright/test';

test('Inspect what happens when scrolling directly into view under Slow 3G', async ({ page }) => {
  const client = await page.context().newCDPSession(page);

  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 500,
    downloadThroughput: (300 * 1024) / 8,
    uploadThroughput: (300 * 1024) / 8,
    connectionType: 'cellular3g',
  });

  console.log('Navigating under Slow 3G to https://aisyncsoftware.in/ ...');
  await page.goto('https://aisyncsoftware.in/', { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Mark test as slow (triples the default 30s timeout to 90s) to accommodate Slow 3G network emulation
  test.slow();

  const sections = [
    { name: 'SeeItInAction', locator: page.getByRole('heading', { name: /See It In Action/i }) },
    { name: 'CaseStudy 1 (Bhavani)', locator: page.getByRole('heading', { name: /Bhavani Cashews/i }) },
    { name: 'CaseStudy 2 (AORR)', locator: page.getByRole('heading', { name: /AORR/i }) },
    { name: 'CaseStudy 3 (Hawksbill)', locator: page.getByRole('heading', { name: /Hawksbill Technik/i }) },
    { name: 'CaseStudy 4 (Globus)', locator: page.getByRole('heading', { name: /Globus Travel Services/i }) },
    { name: 'CaseStudy 5 (Phoenix)', locator: page.getByRole('heading', { name: /Phoenix Technical/i }) },
    { name: 'CaseStudy 6 (Arise)', locator: page.getByRole('heading', { name: /Arise Machine Tools/i }) },
  ];

  for (const s of sections) {
    const loc = s.locator.first();
    await loc.scrollIntoViewIfNeeded();
    // Wait a brief moment as a user pausing to read
    await page.waitForTimeout(500);

    const check = await loc.evaluate(el => {
      let node: HTMLElement | null = el as HTMLElement;
      // Find closest motion or card container
      let container = node.closest('[class*="rounded-3xl"], [class*="rounded-2xl"], section');
      let op = 1;
      let curr = node;
      while (curr && curr !== document.body) {
        op *= parseFloat(window.getComputedStyle(curr).opacity);
        curr = curr.parentElement as HTMLElement;
      }
      return {
        inlineStyle: (container as HTMLElement)?.getAttribute('style'),
        effectiveOpacity: op,
        boundingTop: node.getBoundingClientRect().top,
      };
    });

    console.log(`[${s.name}] effectiveOpacity: ${check.effectiveOpacity}, top: ${check.boundingTop}, style: "${check.inlineStyle}"`);
  }
});
