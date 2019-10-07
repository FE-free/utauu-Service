import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1569428558809_566";

  // add your egg config in here
  config.middleware = [];

  //  数据库配置
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || "mongodb://127.0.0.1/utauu",
    options: {
      server: {
        poolSize: 40
      }
    }
  };

  //  配置安全校验 - 暂时取消
  config.security = {
    csrf: {
      // ignoreJSON: true
      enable: false
    },
    domainWhiteList: ["*"],
    xframe: {
      enable: false
    }
  };

  // 跨域
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTION"
  };

  // 校验
  config.validate = {
    // convert 类型转换
    convert: true,
    widelyUndefined: true
  };

  // 中间件
  config.middleware = ["errorHandler"];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
