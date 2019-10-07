export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const tagSchema = new Schema({
    msg: {
      type: String
    }
  });
  return mongoose.model("Tag", tagSchema);
};
