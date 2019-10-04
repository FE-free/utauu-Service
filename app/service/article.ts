import { Service } from "egg";

/**
 * Article Service
 */
export default class Article extends Service {
  /**
   * 存储文章
   * @param name - your name
   */
  public async createArticle(article: { title: string; content: string }) {
    const { ctx } = this;
    return await ctx.model.Article.create(article);
  }
}
