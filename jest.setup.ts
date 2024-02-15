import Driver from './helpers/Driver';
import { Config } from './helpers/Config';

beforeAll(async () => {
  if (!Config.UDID) {
    throw new Error('No UDID was specified');
  }

  const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:app': Config.APP_PATH,
    'appium:udid': Config.UDID,
  };

  await Driver.init({
    hostname: Config.APPIUM_HOST,
    port: Config.APPIUM_PORT,
    logLevel: 'silent',
    capabilities,
  });
});

afterAll(async () => {
  const driver = Driver.getDriver();
  if (driver) {
    await driver.deleteSession();
  }
})
