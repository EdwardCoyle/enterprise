/* eslint-disable */
import { SpecReporter } from 'jasmine-spec-reporter';
import specs from './helpers/detect-custom-spec-list.js';

const basePath = __dirname;

export default {
  params: {
    theme: 'new'
  },
  allScriptsTimeout: 120000,
  logLevel: 'INFO',
  specs: specs('e2e', process.env.PROTRACTOR_SPECS),
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--headless',
        '--disable-gpu',
        '--window-size=1200,800',
        '--disable-dev-shm-usage',
        '--no-sandbox'
      ]
    },
    loggingPrefs: {
      driver: 'INFO',
      server: 'INFO',
      browser: 'SEVERE'
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4000',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: () => {}
  },
	plugins: [
		{
			// The module name
			package: 'protractor-image-comparison',
			// Some options, see the docs for more
			options: {
				baselineFolder: `${basePath}/baseline`,
				screenshotPath: `${basePath}/.tmp/`,
        autoSaveBaseline: true,
        ignoreAntialiasing: true,
        disableCSSAnimation: false,
        debug: false,
        hideScrollBars: true,
        clearRuntimeFolder: true
			},
		}
	],
  onPrepare: () => {
    global.requireHelper = (filename) => require(`${basePath}/helpers/${filename}.js`);
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: { displayStacktrace: 'specs' }
    }));

    return browser.getProcessedConfig().then((cap) => {
      browser.browserName = cap.capabilities.browserName.toLowerCase();
      if (browser.browserName === 'chrome') {
        return browser.driver.manage().window().setSize(1200, 800);
      }
    });
  }
};
