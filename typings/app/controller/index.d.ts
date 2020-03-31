// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAli from '../../../app/controller/ali';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportTags from '../../../app/controller/tags';
import ExportUser from '../../../app/controller/user';
import ExportUserArticle from '../../../app/controller/userArticle';
import ExportUserTags from '../../../app/controller/userTags';

declare module 'egg' {
  interface IController {
    ali: ExportAli;
    article: ExportArticle;
    home: ExportHome;
    tags: ExportTags;
    user: ExportUser;
    userArticle: ExportUserArticle;
    userTags: ExportUserTags;
  }
}
