import { Service } from "egg";

export default class UserService extends Service {
  /**
   * login
   */
  public async login(name: string) {
    return `hi, ${name}`;
  }

  public async register(body: any) {
    const { ctx } = this;
    return await ctx.model.User.create(body);
  }

  public async inquire(condition: any) {
    const { ctx } = this;
    return await ctx.model.User.findOne(condition);
  }
}
