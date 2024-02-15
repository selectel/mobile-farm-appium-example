import dotenv from 'dotenv';

dotenv.config();

export class Config {
  public static get APP_PATH(): string {
    if (!process.env.APP_PATH) {
      throw new Error('No APP_PATH specified');
    }
    return process.env.APP_PATH;
  }

  public static readonly APPIUM_HOST = process.env.APPIUM_HOST || '127.0.0.1';
  public static readonly APPIUM_PORT = Number(process.env.APPIUM_PORT) || 4723;
  public static readonly UDID = process.env.UDID;
}
