const UserModel = require("./user.models");

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

  addOne: (req, res) => {
    const {
      nama,
      email,
      password,
      jenisKelamin,
      umur,
      berat_badan,
      tinggi_badan,
      activity_level,
      kaloriHarian,
    } = req.body;
    // if(nama === null && email === null && password === null && nik === null && email === null && phoneNumber === null && wa === null && password === null ) {
    //     res.status(400).json({message : "Data tidak boleh kosong"})
    // }else{
    UserModel.create(
      {
        nama,
        email,
        password,
        jenisKelamin,
        umur,
        berat_badan,
        tinggi_badan,
        activity_level,
        kaloriHarian,
      },
      (error, result) => {
        if (error) {
          res.status(400).json({
            message: "error",
          });
        } else {
          res.status(200).json({
            message: "success",
            result,
          });
        }
      }
    );
  },

  updateOne: async (req, res) => {
    const {
      nama,
      email,
      password,
      jenisKelamin,
      umur,
      berat_badan,
      tinggi_badan,
      activity_level,
      kaloriHarian,
    } = req.body;
    const users = await UserModel.updateOne(
      { _id: req.params.id },
      {
        nama,
        email,
        password,
        jenisKelamin,
        umur,
        berat_badan,
        tinggi_badan,
        activity_level,
        kaloriHarian,
      },
      { new: true }
    );
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
};
