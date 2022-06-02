const { getConfig } = require('../../helpers/e2e-utils.js');

describe('Tooltip Puppeteer Tests', () => {
  const baseUrl = 'http://localhost:4000/components/tooltip';

  describe('Tooltips Index Page Tests', () => {
    const url = `${baseUrl}/example-index?theme=classic&layout=nofrills`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should not visual regress', async () => {
      await page.evaluate(() => {
        $('#tooltip-btn').tooltip({
          keepOpen: true
        });
      });

      const button = await page.$('#tooltip-btn');
      button.hover();

      await page.waitForSelector('.tooltip.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      const image = await page.screenshot();
      const config = getConfig('tooltip-index');
      await page.reload({ waitUntil: ['domcontentloaded', 'networkidle0'] });
      expect(image).toMatchImageSnapshot(config);
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should show the tooltip on mouse hover', async () => {
      const button = await page.$('#tooltip-btn');
      button.hover();

      await page.waitForSelector('.tooltip.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });

    it('should show the tooltip on keyboard tab', async () => {
      page.keyboard.press('Tab');
      await page.waitForSelector('.tooltip.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });
  });

  describe('Tooltips on icon tests', () => {
    const url = `${baseUrl}/test-svg-icons`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should not visual regress', async () => {
      await page.evaluate(() => {
        $('#standalone-delete-icon').tooltip({
          keepOpen: true
        });
      });

      const button = await page.$('#standalone-delete-icon');
      button.hover();

      await page.waitForSelector('.tooltip.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      const image = await page.screenshot();
      const config = getConfig('tooltip-on-icons');
      await page.reload({ waitUntil: ['domcontentloaded', 'networkidle0'] });
      expect(image).toMatchImageSnapshot(config);
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should show the tooltip on mouse hover', async () => {
      const button = await page.$('#standalone-delete-icon');
      button.hover();

      await page.waitForSelector('.tooltip.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });
  });

  describe('Tooltips icons page tests', () => {
    const url = `${baseUrl}/example-icon-in-tooltip?theme=classic&layout=nofrills`;

    beforeAll(async () => {
      await page.goto(url, { waitUntil: ['domcontentloaded', 'networkidle0'] });
    });

    it('should not visual regress', async () => {
      await page.evaluate(() => {
        $('#tooltip-btn').tooltip({
          keepOpen: true
        });
      });

      const button = await page.$('#tooltip-btn');
      button.hover();

      await page.waitForSelector('.tooltip.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());

      const image = await page.screenshot();
      const config = getConfig('tooltip-with-icon');
      await page.reload({ waitUntil: ['domcontentloaded', 'networkidle0'] });
      expect(image).toMatchImageSnapshot(config);
    });

    it('should show the title', async () => {
      await expect(page.title()).resolves.toMatch('IDS Enterprise');
    });

    it('should show the tooltip with icon on mouse hover', async () => {
      const button = await page.$('#tooltip-btn');
      button.hover();

      await page.waitForSelector('.tooltip.is-open', { visible: true })
        .then(element => expect(element).toBeTruthy());
    });
  });
});
