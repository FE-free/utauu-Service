import * as crypto from 'crypto';

export const cryptPwd = (pwd: string) => {
  const md5 = crypto.createHash('md5');
  return md5.update(pwd).digest('hex');
}