const { verifyToken } = require("../utils/jwt");

const Authentication = (req,res,next) => {
  try{
        const userToken = req.headers.authorization;
        if(!userToken){
            return res.status(401).send("UnAuthorized")
        }
        const token = userToken.split(" ")[1];
        const payload = verifyToken(token)
        if(!payload) {return res.status(401).send("UnAuthorized")}
        req.user = payload
        next()
    }
    catch(err){
        console.error(err);
    }
}

module.exports = {Authentication}