import { Controller } from "egg";

// 统一数据返回格式
export default class BaseController extends Controller {
  public success(data?: any) {
    this.ctx.body = {
      status: "Success",
      data,
      code: 200
    };
  }

  public gotError() {
    this.ctx.body = {
      status: "Failure",
      message: "Username already exists"
    };
  }

  // 校验失败使用
  public validateError(data: any, code?: number) {
    this.ctx.body = {
      status: "Failure",
      message: "invalid post params",
      info: data,
      code: code || 403
    };
    this.ctx.status = 403;
  }

  //  未找到数据
  public notFound(msg: any) {
    this.ctx.body = {
      status: "Failure",
      message: msg || "not found"
    };
    this.ctx.status = 404;
  }
}
