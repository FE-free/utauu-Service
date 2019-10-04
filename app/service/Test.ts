import { Service } from "egg";

/**
 * Test Service
 */
export default class Test extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    const { ctx } = this;
    console.log("====>>>>", ctx.model.Article.find());
    return `hi, ${name}`;
  }
}
