const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vishurizz01:RzfgxKDYAOSSooKq@cluster0.7ozbuch.mongodb.net/userappnew"
);
const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
});
const user = mongoose.model("user", userSchema);
user.create({
  userName: "vishurizz01",
  password: "vishurizz01",
});