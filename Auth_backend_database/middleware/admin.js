const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const username = req.headers.username; // vishu@gmail.com
    const password = req.headers.password; /// 123456

    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value) {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "Admin doesnt exist"
            })
        }
    })
}

module.exports = adminMiddleware;