import { Service } from "egg";

/**
 * Article Service
 */
export default class Article extends Service {
  // 获取全部文章
  public async getArticle() {
    return await this.ctx.model.Article.find();
  }

  // 获取单篇文章
  public async getArticleDetail(id: string) {
    return await this.ctx.model.Article.findById(id);
  }

  // 获取公布的文章文章
  public async getPublishArticle() {
    return await this.ctx.model.Article.find({ publishState: true });
  }

  // 获取公布的文章文章
  public async getTagClassArticle(params: any) {
    return await this.ctx.model.Article.find(params);
  }

  public async deleteArticle(id: string) {
    return await this.ctx.model.Article.findByIdAndDelete(id);
  }

  // 更新文章
  public async updateArticle(id: string, article: any) {
    return await this.ctx.model.Article.findByIdAndUpdate(id, article);
  }

  // 创建文章
  public async createArticle(article: any) {
    return await this.ctx.model.Article.create(article);
  }
}
