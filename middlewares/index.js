const express = require("express");
const app = express();

app.use(express.json())
app.get("/health-checkup", function (req, res) {
  let username = req.headers.username;
  let passwerd = req.headers.password;
  let kidneysId = req.query.kidneysId;
  if (username === "vishu" && passwerd === "123") {
    res.json({msg:"Welcome to the health checkup page"});
  } else {
    res.status(403).json({ msg: "user does not exists" });
  }
  if (kidneysId == 1 || kidneysId == 2) {
    res.send("you have perfect number of kidneys");
  } else{
    res.status(403).json({ msg: "you do not have perfect number of kidneys" });
  }
});
app.listen(3005);
