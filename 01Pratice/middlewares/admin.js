const { Admin } = require("../db");

const adminMiddleware = () => {
  const username = req.headers.username;
  const password = req.headers.password;
  Admin.findone({
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

module.exports(adminMiddleware);
