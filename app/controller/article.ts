import BaseController from "../core/base_controller";
import { validataArticle } from '../config/validataRules';
// 文章 模块
export default class ArticleController extends BaseController {
  // 获取文章
  public async getArticle() {
    this.success(await this.service.article.getArticle());
  }

  // 获取单篇文章详情
  public async getArticleDetail() {
    this.success(
      await this.service.article.getArticleDetail(this.ctx.params.id)
    );
  }

  // 获取公布状态文章
  public async getPublishArticle() {
    this.success(await this.service.article.getPublishArticle());
  }

  // 获取公布状态文章
  public async getTagClassArticle() {
    this.success(await this.service.article.getTagClassArticle(this.ctx.query));
  }

  // 删除文章
  public async deleteArticle() {
    const { ctx } = this;
    this.success(await this.service.article.deleteArticle(ctx.query.articleId));
  }

  // 更新单篇文章详情
  public async updateArticle() {
    const { ctx } = this;
    const errors = ctx.validataArticle(validataArticle, ctx.request.body);

    if (errors) {
      this.validateError(errors);
      return;
    }

    this.success(
      await this.service.article.updateArticle(
        ctx.query.articleID,
        ctx.request.body
      )
    );
  }

  // 新建文章
  public async createArticle() {
    const { ctx } = this;
    const errors = ctx.validataArticle(validataArticle, ctx.request.body);

    if (errors) {
      this.validateError(errors);
      return;
    }

    const articleInfo = Object.assign(ctx.request.body, {createTime: new Date().getTime()})

    const result = await this.service.article.createArticle(articleInfo);

    this.success(result);
  }
}
