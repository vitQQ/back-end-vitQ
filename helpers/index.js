const jwt = require("jsonwebtoken")
const authenticateJWT = (req, res, next) => {

    const authHeader = req.headers.authorization;
  
    if (authHeader) {
  
      const token = authHeader;
  
      jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {

        if (err) {
          return res.status(403).send({
            message: "you are not allowed"
          });
        }
        req.user = user;
        console.log(req.user);
        next();
      });
    } else {
      res.status(200).send({message: "OK", result: "You Must Login"})
    }
  };

module.exports = authenticateJWT