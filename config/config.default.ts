import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    secret: appInfo.name + "_1569428558809_566"
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = bizConfig.secret;

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

  // redis
  config.redis = {
    client: {
      port: 6379, // Redis port
      host: "127.0.0.1", // Redis host
      password: "auth",
      db: 0
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

  // jwt
  config.jwt = {
    secret: bizConfig.secret
  };

  // 中间件
  config.middleware = ["errorHandler"];

  // add your special config in here

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
