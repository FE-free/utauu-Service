import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  /*** 获取文章 */
  router.get("/getUserArticle", controller.userArticle.getUserArticle);

  router.get("/getUserArticleDetail", controller.userArticle.getUserArticleDetail);

}