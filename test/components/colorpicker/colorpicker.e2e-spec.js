const { browserStackErrorReporter } = requireHelper('browserstack-error-reporter');
const config = requireHelper('e2e-config');
const utils = requireHelper('e2e-utils');
requireHelper('rejection');

jasmine.getEnv().addReporter(browserStackErrorReporter);

describe('Colorpicker example-index tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/colorpicker/example-index');
  });

  if (utils.isChrome() && utils.isCI()) {
    it('Should not visual regress on example-index', async () => {
      await browser.driver.sleep(config.waitsFor);
      const colorpickerSection = await element(by.id('maincontent'));
      await browser.driver
        .wait(protractor.ExpectedConditions.presenceOf(colorpickerSection), config.waitsFor);
      const colorpickerContainer = await element.all(by.className('colorpicker-container')).first();

      expect(await browser.protractorImageComparison.checkElement(colorpickerContainer, 'colorpicker-init')).toEqual(0);
      await element(by.css('#background-color + .trigger .icon')).click();
      await browser.driver.sleep(config.waitsFor);

      expect(await browser.protractorImageComparison.checkElement(colorpickerSection, 'colorpicker-open')).toEqual(0);
    });
  }

  it('Should open popup on icon click', async () => {
    await element(by.css('#background-color + .trigger .icon')).click();

    expect(await element(by.css('#background-color.is-open')).isDisplayed()).toBe(true);
  });

  it('Should pick color from picker', async () => {
    await element(by.css('#background-color + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.id('background-color')).getAttribute('value')).toEqual('#1A1A1A');
  });

  it('Should pick clear color from picker', async () => {
    await element(by.css('#background-color + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:last-child a:first-child')).click();

    expect(await element(by.id('background-color')).getAttribute('value')).toEqual('');
    expect(await element(by.css('.swatch.is-invalid')).isDisplayed()).toBe(true);
  });

  it('Should open popup on keypress(arrow-down)', async () => {
    await element(by.id('background-color')).sendKeys(protractor.Key.ARROW_DOWN);

    expect(await element(by.css('#background-color.is-open')).isDisplayed()).toBe(true);
  });

  it('Should pick color from picker with keypress', async () => {
    await element(by.id('background-color')).sendKeys(protractor.Key.ARROW_DOWN);

    expect(await element(by.css('#background-color.is-open')).isDisplayed()).toBe(true);

    await element(by.css('#colorpicker-menu li:first-child a:first-child')).sendKeys(protractor.Key.SPACE);

    expect(await element(by.id('background-color')).getAttribute('value')).toEqual('#1A1A1A');
  });

  it('Should pick clear color from picker with keypress', async () => {
    await element(by.id('background-color')).sendKeys(protractor.Key.ARROW_DOWN);

    expect(await element(by.css('#background-color.is-open')).isDisplayed()).toBe(true);

    await element(by.css('#colorpicker-menu li:last-child a:first-child')).sendKeys(protractor.Key.SPACE);

    expect(await element(by.id('background-color')).getAttribute('value')).toEqual('');
    expect(await element(by.css('.swatch.is-invalid')).isDisplayed()).toBe(true);
  });

  it('Should set clear swatch', async () => {
    await element(by.id('background-color')).sendKeys(protractor.Key.BACK_SPACE);
    await element(by.css('body')).click();

    expect(await element(by.id('background-color')).getAttribute('value')).toEqual('#B94E4');
    expect(await element(by.css('.swatch.is-invalid')).isDisplayed()).toBe(true);
  });
});

describe('Colorpicker show label tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/colorpicker/example-show-label');
  });

  it('Should pick color from picker and set label', async () => {
    await element(by.css('#show-label + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.id('show-label')).getAttribute('value')).toEqual('Slate10');
  });

  it('Should pick clear color from picker and set label', async () => {
    await element(by.css('#show-label + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:last-child a:first-child')).click();

    expect(await element(by.id('show-label')).getAttribute('value')).toEqual('None');
  });
});

describe('Colorpicker custom label tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/colorpicker/example-custom-labels');
  });

  it('Should pick color from picker as custom color and label', async () => {
    await element(by.css('#custom-color + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.id('custom-color')).getAttribute('value')).toEqual('#2578a9');

    await element(by.css('#custom-label + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.id('custom-label')).getAttribute('value')).toEqual('Grape10');
  });
});

describe('Colorpicker case types tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/colorpicker/test-case-types');
  });

  it('Should pick color from picker and use upper case', async () => {
    await element(by.css('#colorpicker-uc + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.id('colorpicker-uc')).getAttribute('value')).toEqual('#1A1A1A');
  });

  it('Should pick color from picker and use lower case', async () => {
    await element(by.css('#colorpicker-lc + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.id('colorpicker-lc')).getAttribute('value')).toEqual('#1a1a1a');
  });
});

describe('Colorpicker clearable tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/colorpicker/test-clearable');
  });

  it('Should show clearable option', async () => {
    await element(by.css('#cp-clearable-true + .trigger .icon')).click();

    expect(await element(by.css('#colorpicker-menu li:last-child .swatch')).getAttribute('class')).toContain('is-empty');
  });

  it('Should not show clearable option', async () => {
    await element(by.css('#cp-clearable-false + .trigger .icon')).click();

    expect(await element(by.css('#colorpicker-menu li:last-child .swatch')).getAttribute('class')).not.toContain('is-empty');
  });
});

describe('Colorpicker states tests', () => {
  beforeEach(async () => {
    await utils.setPage('/components/colorpicker/test-states');
  });

  it('Should check for state Non-Editable', async () => {
    await element(by.css('#non-editable + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.id('non-editable')).getAttribute('value')).toEqual('#1A1A1A');

    await element(by.id('non-editable')).sendKeys(protractor.Key.BACK_SPACE);
    await element(by.css('body')).click();

    expect(await element(by.id('non-editable')).getAttribute('value')).toEqual('#1A1A1A');
  });

  it('Should check for state Disabled', async () => {
    await element(by.css('#foreground-color + .trigger .icon')).click();

    expect(await element(by.css('#foreground-color.is-open')).isPresent()).toBe(false);
    expect(await element(by.css('#foreground-color')).isEnabled()).toBeFalsy();
  });

  it('Should check for state Readonly', async () => {
    await element(by.css('#readonly-color + .trigger .icon')).click();

    expect(await element(by.css('#readonly-color.is-open')).isPresent()).toBe(false);
    expect(await element(by.css('#readonly-color[readonly]')).isDisplayed()).toBe(true);
  });

  it('Should check for Dirty Tracking', async () => {
    await element(by.css('#dirty-color + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:first-child a:first-child')).click();

    expect(await element(by.css('.icon-dirty')).isPresent()).toBe(true);

    await element(by.css('#dirty-color + .trigger .icon')).click();
    await element(by.css('#colorpicker-menu li:last-child a:first-child')).click();

    expect(await element(by.css('.icon-dirty')).isPresent()).toBe(false);
  });

  it('Should check for Validation required rule', async () => {
    const colorpickerEl = await element(by.id('required-color'));
    await colorpickerEl.clear();

    expect(await colorpickerEl.getAttribute('value')).toEqual('');

    await colorpickerEl.sendKeys(protractor.Key.TAB);
    await browser.driver.sleep(config.sleep);

    expect(await element(by.css('.message-text')).getText()).toBe('Required');
    expect(await element(by.css('.icon-error')).isPresent()).toBe(true);
    expect(await colorpickerEl.getAttribute('class')).toContain('error');
  });

  it('Should check for api option Just Color', async () => {
    expect(await element(by.id('color-only')).getCssValue('width')).toBe('10px');
  });
});
