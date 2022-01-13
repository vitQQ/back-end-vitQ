const UserModel = require("./user.models");
const helper = require("../login/bcrypt");
const kalori = require("../../helpers/kalori");

module.exports = {
  getAll: async (req, res) => {
    try {
      const idUser = req.user.id;
      const data = await UserModel.findOne({ _id: idUser });
      console.log(data);
      res.send({ message: "SUCCESS", result: data });
    } catch (error) {
      res.status(500).send(error.message);
    }

    // UserModel
    //   .find({
    //     raw: true,
    //   })
    //   .then((result) => {
    //     res.send({ message: "SUCCESS", result });
    //   })
    //   .catch((error) => res.send(error));
  },

  getUser: (req, res) => {
    UserModel.findOne({
      _id: req.params.id,
    })
      .then((result) => {
        res.send({ message: "SUCCESS", result });
      })
      .catch((error) => res.send(error));
  },

  addOne: async (req, res) => {
    try {
      const body = req.body;
      const newUser = new UserModel({
        nama: body.nama,
        email: body.email,
        password: helper.hash(body.password),
        jenisKelamin: body.jenisKelamin,
        umur: body.umur,
        berat_badan: body.berat_badan,
        tinggi_badan: body.tinggi_badan,
        activity_level: body.activity_level,
        kaloriHarian: body.kaloriHarian,
      });
      const exist = await UserModel.findOne({ email: newUser.email });
      console.log(exist)
      if (exist) {
        res.status(403).send("Email Already Exist");
      } else {
        const saved = await newUser.save();
        res.status(201).send("Account Created");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateOne: async (req, res) => {
    try {
      const body = req.body;
      const users = await UserModel.updateOne({_id: req.user.id},
        {
          nama : body.nama,
          email: body.email,
          password: helper.hash(body.password),
          jenisKelamin: body.jenisKelamin,
          umur: body.umur,
          berat_badan: body.berat_badan,
          tinggi_badan: body.tinggi_badan,
          activity_level: body.activity_level,
          kaloriHarian: kalori(sex, height, weight, age, actLevel),
        })
        if (users) {
          res.send({
            message: "SUCCESS",
            users, //atau user!!!!!!!!!!!!!!!!
          });
        } else {
          res.send({
            message: "ERROR",
          });
        }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  deleteOne: async (req, res) => {
    const users = await UserModel.deleteOne(
      { _id: req.params.id },
      { new: true }
    );
    if (users) {
      res.send({
        message: "SUCCESS",
        UserModel, //user
      });
    } else {
      res.send({ message: "ERROR" });
    }
  },

  loginByGoogle : async(req,res) => {
    try {
      const profile = req.body.profileObj;

      UserModel.create({
        nama : profile.name,
        email: profile.email
      })
        .then(result => {
          console.log(result);
          res.status(200).send({
            message:'success',
            result,
          })
        })
        .catch (error => {
          console.log(error);
          res.status(500).send({
            message:'error',
            error, 
          })
        })
    } catch (e) {
      console.log(error);
      res.status(401).send();
    }
  },
};
