import BaseController from "../core/base_controller";

// 文章 模块
export default class ArticleController extends BaseController {
  // 新建文章
  public async createArticle() {
    const { ctx } = this;

    const errors = this.app.validator.validate(
      { title: "string", content: "int" },
      ctx.request.body
    );

    if (errors) {
      this.validateError(errors);
      return;
    }

    const { title, content } = ctx.request.body;

    const result = await this.service.article.createArticle({
      title,
      content
    });

    this.success(result);
  }
}
