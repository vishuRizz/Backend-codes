const { Router } = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { Admin } = require("../db");
const router = Router();

router.post();
router.post("/signup", (req, res) => {
  // admin will sign up here
  const username = req.body.username;
  const password = req.body.password;
  // later we will add a check if the username with this passs already exists or not
  Admin.create({
    username: username,
    password: password,
  })
  .then(()=>{
    res.send("admin created");
  })
  .catch((err)=>{
    res.send(err);
    })

});
router.post("/courses",adminMiddleware ,(req, res) => {
  // admin will add courses here
});
router.get("/courses",adminMiddleware ,(req, res) => {
  // admin will get all courses here
});
