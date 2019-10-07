import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);

  /*** 文章 */
  //  创建文章
  router.post("/createArticle", controller.article.createArticle);
  //  获取文章
  router.get("/getArticle", controller.article.getArticle);
  //  获取文章
  router.get("/getArticleDetail/:id", controller.article.getArticleDetail);
  //  更新文章
  router.put("/updateArticle", controller.article.updateArticle);
  //  获取公布文章
  router.get("/getPublishArticle", controller.article.getPublishArticle);
  //  获取分类文章
  router.get("/getTagClassArticle", controller.article.getTagClassArticle);

  /*** 标签 */
  //  创建标签
  router.post("/createTag", controller.tags.createTag);
  //  获取全部标签
  router.get("/getTagAll", controller.tags.getTagAll);
  //  删除标签
  router.delete("/deleteTag", controller.tags.deleteTag);
};
