const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Admin.create({
    username,
    password,
  })
    .then(() => {
      res.status(200).send("Admin Created");
    })
    .catch(() => {
      res.status(500).send("Error Creating Admin");
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  Course.create({
    title,
    description,
    imageLink,
    price,
  })
    .then((value) => {
      res.status(200).json({
        message: "Course Created",
        course_id: value._id
      });
    })
    .catch(() => {
      res.status(500).send("Error Creating Course");
    });
});

router.get("/courses", adminMiddleware, (req, res) => {
  Course.find({})
      .then((response) => {
    res.json({
      courses: response,
    });
  });
});

module.exports = router;
