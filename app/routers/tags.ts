import { Application, EggAppConfig } from "egg";

export default (app: Application, config: EggAppConfig) => {
  const { controller, router } = app;

  const validateToken = app.middleware.validateToken(config, app);
  router.get("/", controller.home.index);
  
  /*** 标签 */
  //  创建标签
  router.post("/createTag", validateToken,controller.tags.createTag);
  //  获取全部标签
  router.get("/getTagAll",validateToken, controller.tags.getTagAll);
  //  删除标签
  router.delete("/deleteTag",validateToken, controller.tags.deleteTag);

}