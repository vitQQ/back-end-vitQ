const UserMakananModel = require("./userMakanan.models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const idUser = req.user.id;
      const usma = await UserMakananModel.find({ id_user: idUser }).populate(
        "id_makanan"
      );
      res.status(200).send({ message: "OK", data: usma });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getUser: async (req, res) => {
    try {
      const usermakanan = await UserMakananModel.findOne({ _id: req.params.id })
        .populate("id_user")
        .populate("id_makanan");
      res.status(200).send({ message: "OK", data: usermakanan });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  addOne: async (req, res) => {
    try {
      const { id_makanan, jumlah_kalori, jumlah_emisi } = req.body;
      console.log(jumlah_kalori);
      const idUser = req.user.id;
      const data = new UserMakananModel({
        id_user: idUser,
        id_makanan: id_makanan,
        jumlah_kalori: jumlah_kalori,
        jumlah_emisi: jumlah_emisi,
        date_time: new Date()
      });
      const saved = await data.save();
      res.status(201).send({ message: "OK", data: saved });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  updateOne: async (req, res) => {
    const { nilai, jumlah_kalori, jumlah_emisi } = req.body;
    const usrMakanan = await UserMakananModel.updateOne(
      { _id: req.params.id },
      { nilai, jumlah_kalori, jumlah_emisi },
      { new: true }
    );
    if (usrMakanan) {
      res.send({
        message: "SUCCESS",
        usrMakanan,
      });
    } else {
      res.send({
        message: "ERROR",
      });
    }
  },

  deleteOne: async (req, res) => {
    const usrMakanan = await UserMakananModel.deleteOne(
      { _id: req.params.id },
      { new: true }
    );
    if (usrMakanan) {
      res.send({
        message: "SUCCESS",
        UserMakananModel,
      });
    } else {
      res.send({ message: "ERROR" });
    }
  },
};
