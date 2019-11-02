import BaseController from "../core/base_controller";

export default class UserArticleController extends BaseController {
  // 获取删除标签
  public async getUserArticle() {
    this.success(await this.service.userArticle.getPublishArticle());
  }
}


