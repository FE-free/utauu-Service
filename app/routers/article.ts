import { Application, EggAppConfig } from "egg";

export default (app: Application, config: EggAppConfig) => {
  const { controller, router } = app;

  const validateToken = app.middleware.validateToken(config, app);
  router.get("/", controller.home.index);

  /*** 文章 */
  //  创建文章
  router.post("/admin/createArticle",validateToken, controller.article.createArticle);
  //  获取文章
  router.get("/admin/getArticle",validateToken, controller.article.getArticle);
  //  获取文章
  router.get("/admin/getArticleDetail/:id",validateToken, controller.article.getArticleDetail);
  //  更新文章
  router.put("/admin/updateArticle",validateToken, controller.article.updateArticle);
  //  获取公布文章
  router.get("/admin/getPublishArticle",validateToken, controller.article.getPublishArticle);
  //  获取分类文章
  router.get("/admin/getTagClassArticle",validateToken, controller.article.getTagClassArticle);
  //  删除文章
  router.delete("/admin/deleteArticle",validateToken, controller.article.deleteArticle);

}