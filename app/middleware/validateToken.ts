import { Context, Application, EggAppConfig } from "egg";

// import config from '../../config/config.default';

// @ts-ignore
function TokenMiddleware(config: EggAppConfig, app: Application): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    //  是否存在token
    const token = ctx.headers["authorization"];
    if (token) {
      try {
        const payLoad: any = app.jwt.verify(token, app.config.secret);
        // 获取token
        const userId = await app.redis.get(token);
        if (payLoad.id === userId) {
          // readis id 与 token 解密id 匹配
          await next();
        }
      } catch (err) {
        ctx.app.emit("error", err, ctx);
        // token过期
        ctx.body = {
          message: "token不存在或过期",
          code: 415
        };
        ctx.status = 415;
      }
    } else {
      // 没有传递token
      ctx.body = {
        message: "not Token",
        code: 413
      };
      ctx.status = 413;
    }
  };
}

export default TokenMiddleware;
