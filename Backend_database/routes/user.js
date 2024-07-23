const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  User.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.send("User created");
    })
    .catch(() => {
      res.send("User not created");
    });
});

router.get("/courses", (req, res) => {
  Course.find({}).then((response) => {
    res.json({
      All_courses: response,
    });
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implementing course purchase logic
  const { courseId } = req.params;
  const username = req.headers.username;
  User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  ).then(() => {
    res.send("Course purchased");
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implementing fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({
    username: req.headers.username,
  });
  const courses = await Course.find({
    _id: { $in: user.purchasedCourses },
  });
  res.json({
    purchasedCourses: courses,
  });
});

module.exports = router;
