export class ClicksPage {
  public browser: WebdriverIO.Browser
  constructor(driver: WebdriverIO.Browser) {
    this.browser = driver
  }

  private Selectors = {
    button: '[id="com.example.appiumexample:id/button"]',
    counter: '[id="com.example.appiumexample:id/textView"]'
  }
  public getButton(): Promise<WebdriverIO.Element> {
    return this.browser.$(this.Selectors.button);
  }
  public getCounter(): Promise<WebdriverIO.Element> {
    return this.browser.$(this.Selectors.counter)
  }
  public async increaseTo(num: number): Promise<void> {
    const button = await this.getButton()
    for (let i = 0; i < num; i++){
      await button.click()
    }
  }
}
