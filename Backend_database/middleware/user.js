const { User } = require("../db");

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  User.findOne({
    username,
    password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(401).send("Invalid Credentials");
    }
  });
}

module.exports = userMiddleware;
