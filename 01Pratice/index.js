const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

app.use("/admin", adminRouter, (req, res, next) => {});
app.use("/user", userRouter, (req, res, next) => {});
app.listen(3005, () => {
  console.log("server is running on port 3005");
});
