import BaseController from "../core/base_controller";
import conf from '../config/alioss';
import {STS} from 'ali-oss';
const fs = require('fs');
const path = require('path');

export default class AliController extends BaseController {
  public async getSts() {
    // this.success(await this.service.userArticle.getUserArticle());
    const client = new STS({
      accessKeyId: conf.AccessKeyId,
      accessKeySecret: conf.AccessKeySecret,
    });

    let policy;
    if (conf.PolicyFile) {
      policy = fs.readFileSync(path.resolve(__dirname, `../${conf.PolicyFile}`)).toString('utf-8');
    }


    try {
      const result = await client.assumeRole(conf.RoleArn , policy, conf.TokenExpireTime);
      this.success(result);
    } catch (e) {
      this.onError(e.message, e.status)
    }
  }
}


