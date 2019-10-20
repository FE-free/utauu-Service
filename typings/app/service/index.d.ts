// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import "egg";
import ExportTest from "../../../app/service/Test";
import ExportArticle from "../../../app/service/article";
import ExportTags from "../../../app/service/tags";
import ExportUser from "../../../app/service/user";

declare module "egg" {
  interface IService {
    test: ExportTest;
    article: ExportArticle;
    tags: ExportTags;
    user: ExportUser;
  }
}
