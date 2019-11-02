import BaseController from "../core/base_controller";

export default class UserArticleController extends BaseController {
  // 获取删除标签
  public async getUserArticle() {
    this.success(await this.service.userArticle.getUserArticle());
  }

   // 获取单篇文章
  public async getUserArticleDetail() {
    const result = await this.service.userArticle.getUserArticleDetail(this.ctx.query.id);
    console.log('result', result)
    this.success(result);
  }
}


