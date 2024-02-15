import { remote, RemoteOptions } from 'webdriverio';

export default class Driver {
  private static driver: WebdriverIO.Browser;

  public static async init(options: RemoteOptions) {
    this.driver = await remote(options)
  }

  public static getDriver = () => this.driver;
}
