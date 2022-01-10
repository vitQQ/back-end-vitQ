const UserMakananModel = require("./userMakanan.models")

module.exports = {
    getAll: async (req, res) => {
        try{
            const usma = await UserMakananModel.find()
            .populate("id_user")
            .populate("id_makanan");
            res.status(200).send({message: "OK", data: usma});
        } catch (error) {
          res.status(500).send(error.message);
        }
        },

  
    getUser: async (req, res) => {
      try{
        const usermakanan = await UserMakananModel.findOne({_id: req.params.id})
        .populate("id_user")
        .populate("id_makanan")
        res.status(200).send({message: "OK", data: usermakanan});
      } catch (error) {
        res.status(500).send(error.message);
      }
    },
  
    addOne: (req, res) => {
      const {id_user, id_makanan, date_time, nilai, jumlah_kalori, jumlah_emisi} = req.body;
      UserMakananModel.create({
        id_user,
        id_makanan,
        date_time,
        nilai,
        jumlah_kalori,
        jumlah_emisi
      },
        // const id = req.params.id;
        // const body = req.body;
        // const date_time = Date.now()
        // UserMakananModel.create({
        //     id_user : req.UserModel.id,
        //     id_makanan : req.Makanan.id,
        //     date_time : date_time,
        //     nilai : body.nilai,
        //     jumlah_kalori : body.jumlah_kalori,
        //     jumlah_emisi : body.jumlah_emisi,
        // },
        (error, result) => {
            if(error) {
                res.status(400).send({
                    message: "ERROR",
                })
            } else {
                res.status(200).send({
                    message: "SUCCESS", 
                    result,
                })
            }
        })
    },
  
    updateOne: async (req, res) => {
      const {nilai, jumlah_kalori, jumlah_emisi} = req.body;
      const usrMakanan = await UserMakananModel.updateOne(
        { _id: req.params.id },
        {nilai, jumlah_kalori, jumlah_emisi},
        { new: true }
      );
      if (usrMakanan) {
        res.send({
          message: "SUCCESS",
          usrMakanan,
        });
      } else {
        res.send({
          message: "ERROR"
        });
      }
    },
  
    deleteOne: async (req, res) => {
      const usrMakanan = await UserMakananModel.deleteOne({ _id: req.params.id }, { new: true });
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
  