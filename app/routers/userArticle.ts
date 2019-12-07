import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  /*** 获取文章 */
  
  router.get("/u/v/user/getUserArticle", controller.userArticle.getUserArticle);

  router.get("/u/v/user/getUserArticleDetail", controller.userArticle.getUserArticleDetail);

}