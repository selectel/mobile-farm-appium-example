import { ClicksPage } from './clicks.page';
import Driver from '../helpers/Driver';

describe('Clicks', () => {
  let driver: WebdriverIO.Browser;

  jest.setTimeout(30000);

  beforeAll(async () => {
    driver = Driver.getDriver();
  })

  it('should increase clicks', async () => {
    const app = new ClicksPage(driver)
    const textView = await  app.getCounter()
    await  app.increaseTo(10)
    expect(await textView.getText()).toEqual('10')
  });
});
