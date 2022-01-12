const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const helper = require("./bcrypt")

class LoginController {
  static async loginUser(req, res) {
    try {
      const body = req.body;
      const isUser = await UserModel.findOne({
        email: body.email,
      });

      console.log(isUser)


      if (isUser) {
<<<<<<< HEAD
        const cmp = helper.compare(body.password, isUser.password)

        if(cmp){
          const accessToken = jwt.sign(
            { id: isUser.id, email: isUser.email },
            process.env.TOKEN_SECRET,
            { expiresIn: "1h" }
          );
          res.json({
            accessToken,
          });
        }
        else {
          res.send("password incorrect")
        }
        
=======
        const accessToken = jwt.sign(
          { id: isUser.id, email: isUser.email },
          process.env.TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        console.log(accessToken)
        res.json({
          accessToken,
        });
>>>>>>> 890b0886bfdf9ee1f5a3659c5097080ab6d58a39
      } else {
        res.send("Username or password incorrect");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = LoginController