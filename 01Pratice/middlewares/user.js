const { User } = require("../db");

const userMiddleware = () => {
  const username = req.headers.username;
  const password = req.headers.password;
  User.findone({
    username,
    password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(401).send("No autorizado");
    }
  });
};

module.exports(userMiddleware);
