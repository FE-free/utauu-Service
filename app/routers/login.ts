import { Application, EggAppConfig } from "egg";

export default (app: Application, config: EggAppConfig) => {
  const { controller, router } = app;

  const validateToken = app.middleware.validateToken(config, app);
  router.get("/", controller.home.index);
  /*** 登录模块 */
  // 验证token是否生效
  router.get("/u/v/admin/checkToken", validateToken, controller.user.checkToken);
  // 登录
  router.post("/u/v/admin/login", controller.user.login);
  // 注册
  router.post("/u/v/admin/register", controller.user.register);

}