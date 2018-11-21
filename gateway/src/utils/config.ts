import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
  port: number;
  tracing: boolean;
  cacheControl: boolean;
  userPrismaServiceEndpoint: string;
  profilePrismaServiceEndpoint: string;
  organizationPrismaServiceEndpoint: string;
  userPrismaServiceSecret: string;
  profilePrismaServiceSecret: string;
  organizationPrismaServiceSecret: string;
}

const config: IConfig = {
  port: +process.env.PORT || 4000,
  tracing: !process.env.TRACING || true,
  cacheControl: !process.env.CACHE_CONTROL || false,
  userPrismaServiceEndpoint: process.env.USER_PRISMA_SERVICE_ENDPOINT,
  profilePrismaServiceEndpoint: process.env.PROFILE_PRISMA_SERVICE_ENDPOINT,
  organizationPrismaServiceEndpoint: process.env.ORGANIZATION_PRISMA_SERVICE_ENDPOINT,
  userPrismaServiceSecret: process.env.USER_PRISMA_SERVICE_SECRET,
  profilePrismaServiceSecret: process.env.PROFILE_PRISMA_SERVICE_SECRET,
  organizationPrismaServiceSecret: process.env.ORGANIZATION_PRISMA_SERVICE_SECRET,
};

export { config };