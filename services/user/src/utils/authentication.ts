import { verify } from 'jsonwebtoken';
import { config } from './config';

export const APP_SECRET = config.appSecret;

interface Token {
  userId: string
}

interface Context {
  request: any
}

export function getCurrentUser(context: Context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
}
