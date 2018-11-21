import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
  port: number;
  tracing: boolean;
  cacheControl: boolean;
  appSecret: string;
}

const config: IConfig = {
  port: +process.env.PORT || 4000,
  tracing: !process.env.TRACING || true,
  cacheControl: !process.env.TRACING || true,
  appSecret: process.env.APPSECRET,
}

export { config };
