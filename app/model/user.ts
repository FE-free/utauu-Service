export default (app: any) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    name: {
      type: String
    },
    username: {
      type: String
    },
    password: {
      type: String
    }
  });
  return mongoose.model("User", userSchema);
};
