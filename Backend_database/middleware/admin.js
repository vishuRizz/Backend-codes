const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  Admin.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(401).send("Invalid Credentials");
    }
  });
}

module.exports = adminMiddleware;
