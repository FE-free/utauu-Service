import { Application, EggAppConfig } from "egg";

import article from './routers/article';
import tags from './routers/tags';
import login from './routers/login';

import userArticle from './routers/userArticle';

export default (app: Application, config: EggAppConfig) => {
  // 管理端 - 文章
  article(app, config);
  // 管理端 - 标签
  tags(app, config);
  // 管理端 - 登录 校验
  login(app, config);

  // 用户端 - 文章
  userArticle(app);
};
