// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportTags from '../../../app/model/tags';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Tags: ReturnType<typeof ExportTags>;
    User: ReturnType<typeof ExportUser>;
  }
}
