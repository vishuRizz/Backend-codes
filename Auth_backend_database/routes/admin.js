const express = require("express");
const { Admin, Course } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
const adminMiddleware = require("../middleware/admin")

router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: "Admin created successfully",
  });
});
router.post("/signin", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const user = await Admin.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
        token
    })
  } else {
    res.json({
      message: "Invalid username or password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // zod
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
