import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  /*** 获取文章 */
  
  router.get("/backend/user/getUserArticle", controller.userArticle.getUserArticle);

  router.get("/backend/user/getUserArticleDetail", controller.userArticle.getUserArticleDetail);

}