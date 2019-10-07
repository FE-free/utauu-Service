import BaseController from "../core/base_controller";

import { tags } from "../config/validataRules";

export default class TagController extends BaseController {
  // 获取删除标签
  public async deleteTag() {
    const { ctx } = this;

    this.success(await ctx.service.tags.deleteTag(ctx.query.tagID));
  }

  // 获取全部标签
  public async getTagAll() {
    const { ctx } = this;
    this.success(await ctx.service.tags.getTagAll());
  }

  // 创建标签
  public async createTag() {
    const { ctx } = this;

    const errors = ctx.validataArticle(tags, ctx.request.body);

    if (errors) {
      this.validateError(errors);
      return;
    }

    this.success(await ctx.service.tags.createTag(ctx.request.body));
  }
}
