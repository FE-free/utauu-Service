import { Service } from "egg";

/**
 * Article Service
 */
export default class Article extends Service {
  // 获取公布的文章文章
  public async getUserArticle() {
    return await this.ctx.model.Article.find({ 
      publishState: true 
    }, {
      content: 0,
      isEdit: 0,
      publishState: 0,
      __v: 0
    });
  }

  // 获取单篇文章详情
  public async getUserArticleDetail(id: string) {
    return await this.ctx.model.Article.findById(id, {
      introduce: 0,
      isEdit: 0,
      publishState: 0,
      __v: 0,
      _id: 0
    });
  }
}
