const { Admin } = require("../db");

const router = express.Router();

router.post("/signup", async(req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
   await Admin.create({
        username,
        password,
    })
    res.json({
        msg: "admin created successfully"
    })
})
module.exports(router)