import { Application, EggAppConfig } from "egg";

export default (app: Application, config: EggAppConfig) => {
  const { controller, router } = app;

  const validateToken = app.middleware.validateToken(config, app);
  router.get("/", controller.home.index);
  /*** 登录模块 */
  // 验证token是否生效
  router.get("/admin/checkToken", validateToken, controller.user.checkToken);
  // 登录
  router.post("/admin/login", controller.user.login);
  // 注册
  router.post("/admin/register", controller.user.register);

}