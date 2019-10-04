export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const articleSchema = new Schema({
    title: {
      type: String
    },
    content: {
      type: String
    }
  });
  return mongoose.model("Article", articleSchema);
};
