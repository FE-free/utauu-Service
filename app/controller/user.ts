import BaseController from "../core/base_controller";
import { createUser, loginValidata } from "../config/validataRules";
import { cryptPwd } from "../utils/md5";

export default class UserController extends BaseController {
  public checkToken() {
    const { ctx, app, config } = this;
    const token = ctx.headers["authorization"];
    const payLoad = app.jwt.verify(token, config.jwt.secret);
    ctx.body = { payLoad };
  }

  // 用户登录
  public async login() {
    const { ctx, app, config } = this;
    // 验证账号密码是否为空
    const errors = ctx.validataArticle(loginValidata, ctx.request.body);
    if (errors) {
      this.validateError(errors);
      return;
    }

    // 查找到对应的用户密码进行对比数据
    const userInfo = await this.ctx.service.user.findUser({
      username: { $in: [ctx.request.body.username] }
    });
    const loginPassword = cryptPwd(ctx.request.body.password);

    //  密码不匹配则返回
    if (loginPassword !== userInfo.password) {
      this.validateError("密码错误", 403);
      return;
    }

    //  生成token
    const token = app.jwt.sign({ id: userInfo._id }, config.jwt.secret, {
      expiresIn: "1h"
    });

    // 存储至redis
    await app.redis.set(token, userInfo._id);
    // get
    // ctx.body = await app.redis.get('foo');
    // ctx.body = {token};
    this.success({ token });
  }

  //  注册
  public async register() {
    const { ctx } = this;
    const errors = ctx.validataArticle(createUser, ctx.request.body);

    if (errors) {
      this.validateError(errors);
      return;
    }

    // 查找是否重名
    const result = await this.ctx.service.user.inquire({
      username: { $in: [ctx.request.body.username] }
    });

    if (result && result.length > 0) {
      this.gotError();
      return;
    }

    // this.success(result)

    const userInfo = Object.assign(ctx.request.body, {
      password: cryptPwd(ctx.request.body.password)
    });
    await this.ctx.service.user.register(userInfo);
    // TODO 设置JWT
    this.success();
  }
}
