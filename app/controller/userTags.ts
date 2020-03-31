import BaseController from "../core/base_controller";

export default class UserTagsController extends BaseController {
  // 获取全部标签
  public async getTags() {
    this.success(await this.service.tags.getTagAll());
  }
}


