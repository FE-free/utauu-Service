import { Service } from "egg";

/**
 * Article Service
 */
export default class Article extends Service {
  // 获取公布的文章文章
  public async getPublishArticle() {
    return await this.ctx.model.Article.find({ 
      publishState: true 
    }, {
      content: 0,
      isEdit: 0,
      publishState: 0,
      __v:0
    });
  }
}
