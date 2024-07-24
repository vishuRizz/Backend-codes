const { User } = require("../db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")


function userMiddleware(req, res, next) {
  let token = req.headers.authorisation;
  const words = token.split(" ");
  const jwtToken = words[1]
  const decodedToken = jwt.verify(jwtToken, JWT_SECRET)
  if(decodedToken.username){
    next();
  }else{
    res.status(401).json({ error: "token invalide" })
  }
}

module.exports = userMiddleware;
