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

  /*** 标签 */
  //  创建标签
  router.post("/createTag", validateToken,controller.tags.createTag);
  //  获取全部标签
  router.get("/getTagAll",validateToken, controller.tags.getTagAll);
  //  删除标签
  router.delete("/deleteTag",validateToken, controller.tags.deleteTag);

  /*** 登录模块 */
  // 验证token是否生效
  router.get("/checkToken", validateToken, controller.user.checkToken);
  // 登录
  router.post("/login", controller.user.login);
  // 注册
  router.post("/register", controller.user.register);
};
