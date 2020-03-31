import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  /*** 获取标签 */
  router.get("/u/v/user/getTags", controller.userTags.getTags);
}