const jwt = require("jsonwebtoken");
const UserModel = require("../user/user.models");

class LoginController {
  static async loginUser(req, res) {
    try {
      const body = req.body;
      const isUser = await UserModel.findOne({
        email: body.email,
        password: body.password,
      });
      console.log(isUser)
      if (isUser) {
        const accessToken = jwt.sign(
          { id: isUser.id, email: isUser.email },
          process.env.TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        console.log(accessToken)
        res.json({
          accessToken,
        });
      } else {
        res.send("Username or password incorrect");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = LoginController