import { Application, EggAppConfig } from "egg";

export default (app: Application, config: EggAppConfig) => {
  const { controller, router } = app;

  const validateToken = app.middleware.validateToken(config, app);
  router.get("/", controller.home.index);

  /*** 文章 */
  //  创建文章
  router.post("/createArticle",validateToken, controller.article.createArticle);
  //  获取文章
  router.get("/getArticle",validateToken, controller.article.getArticle);
  //  获取文章
  router.get("/getArticleDetail/:id",validateToken, controller.article.getArticleDetail);
  //  更新文章
  router.put("/updateArticle",validateToken, controller.article.updateArticle);
  //  获取公布文章
  router.get("/getPublishArticle",validateToken, controller.article.getPublishArticle);
  //  获取分类文章
  router.get("/getTagClassArticle",validateToken, controller.article.getTagClassArticle);

}