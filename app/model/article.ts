export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  // title: "string",
  // content: "int",
  // publishState: "boolean",
  // isEdit: "boolean",
  // tags: "array",
  // introduce: "string"

  const articleSchema = new Schema({
    title: {
      type: String
    },
    content: {
      type: String
    },
    publishState: {
      type: Boolean
    },
    isEdit: {
      type: Boolean
    },
    tags: {
      type: Array
    },
    introduce: {
      type: String
    },
    createTime: {
      type: Date
    }
  });
  return mongoose.model("Article", articleSchema);
};
