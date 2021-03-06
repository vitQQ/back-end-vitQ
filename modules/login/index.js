const jwt = require("jsonwebtoken");
const UserModel = require("../user/user.models");
const helper = require("./bcrypt");

class LoginController {
  static async loginUser(req, res) {
    try {
      const body = req.body;
      const isUser = await UserModel.findOne({
        email: body.email,
      });

      console.log(isUser);

      if (isUser) {
        const cmp = helper.compare(body.password, isUser.password);

        if (cmp) {
          const accessToken = jwt.sign(
            { id: isUser.id, email: isUser.email },
            process.env.TOKEN_SECRET
          );
          res.json({
            accessToken,
          });
        } else {
          res.status(401).send("password incorrect");
        }
      } else {
        res.status(401).send("Username or password incorrect");
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = LoginController;
