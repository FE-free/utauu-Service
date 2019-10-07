import { Context } from "egg";

export default {
  genErrorMsg(
    this: Context,
    errorInfo: {
      errorCode: number;
      message: string;
    }
  ) {
    const result = {
      errorCode: errorInfo.errorCode,
      message: errorInfo.message,
      timestamp: Date.now()
    };
    return JSON.stringify(result);
  },

  validataArticle(this: Context, rules: any, params: any) {
    return this.app.validator.validate(rules, params);
  }
};
