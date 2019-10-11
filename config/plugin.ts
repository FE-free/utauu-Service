import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongoose: {
    enable: true,
    package: "egg-mongoose"
  },

  validate: {
    enable: true,
    package: "egg-validate"
  },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  redis: {
    enable: true,
    package: "egg-redis"
  },
  jwt: {
    enable: true,
    package: "egg-jwt"
  }
};

export default plugin;
