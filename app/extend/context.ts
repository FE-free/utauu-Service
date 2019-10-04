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
  }
};
