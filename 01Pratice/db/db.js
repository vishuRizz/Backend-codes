const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vishurizz01:RzfgxKDYAOSSooKq@cluster0.7ozbuch.mongodb.net/test-practice"
);

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});
const Admin = mongoose.model("Admin", adminSchema);
const User = mongoose.model("User", userSchema);
const Courses = mongoose.model("Courses", courseSchema);

module.exports({ Admin, User, Courses });
