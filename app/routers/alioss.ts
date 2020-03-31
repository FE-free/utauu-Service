import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  //  get sts
  router.get("/u/v/sts", controller.ali.getSts);

}