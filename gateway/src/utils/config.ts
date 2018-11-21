import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
  port: number;
  tracing: boolean;
  cacheControl: boolean;
  userServiceUri: string;
  profileServiceUri: string;
  organizationServiceUri: string;
}

const config: IConfig = {
  port: +process.env.PORT || 4000,
  tracing: !process.env.TRACING || true,
  cacheControl: !process.env.CACHE_CONTROL || true,
  userServiceUri: process.env.USER_SERVICE_URI,
  profileServiceUri: process.env.PROFILE_SERVICE_URI,
  organizationServiceUri: process.env.ORGANIZATION_SERVICE_URI,
};

export { config };