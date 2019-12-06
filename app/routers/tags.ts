import { Application, EggAppConfig } from "egg";

export default (app: Application, config: EggAppConfig) => {
  const { controller, router } = app;

  const validateToken = app.middleware.validateToken(config, app);
  router.get("/", controller.home.index);

  /*** 标签 */
  //  创建标签
  router.post("/backend/admin/createTag", validateToken, controller.tags.createTag);
  //  获取全部标签
  router.get("/backend/admin/getTagAll", validateToken, controller.tags.getTagAll);
  //  删除标签
  router.delete("/backend/admin/deleteTag", validateToken, controller.tags.deleteTag);

}