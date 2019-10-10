import BaseController from "../core/base_controller";
import { createUser } from "../config/validataRules";
import {cryptPwd} from '../utils/md5';

export default class UserController extends BaseController {
  public async login() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.login("egg");
  }

  public async register () {
    const { ctx } = this;
    const errors = ctx.validataArticle(createUser, ctx.request.body);

    if (errors) {
      this.validateError(errors);
      return;
    }

    // 查找是否重名
    const result = await this.ctx.service.user.inquire({username: {$in: [ctx.request.body.username]}});
    console.log('result', result.length);

    if (result.length > 0) {
      this.gotError()
      return;
    }

    // this.success(result)

    const userInfo = Object.assign(ctx.request.body, { password:  cryptPwd(ctx.request.body.password) });
    await this.ctx.service.user.register(userInfo)
    // TODO 设置JWT
    this.success();
  }
}
