const { Admin } = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
   // jwt authenticationnnn
   let token = req.headers.authorization;
   const words = token.split(" ")
   const jwtToken = words[1];
   const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
   if(decodedValue.username){
        next();
   } else{
    res.status(401).send("Unauthorized")
   }

}
module.exports = adminMiddleware;