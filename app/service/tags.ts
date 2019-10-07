import { Service } from "egg";

/**
 * Test Service
 */
export default class Test extends Service {
  public async createTag(tag: { msg: string }) {
    return await this.ctx.model.Tags.create(tag);
  }

  public async getTagAll() {
    return await this.ctx.model.Tags.find();
  }

  public async deleteTag(id: string) {
    return await this.ctx.model.Tags.findByIdAndDelete(id);
  }
}
