const MakananModel = require("./makanan.models")

module.exports = {
  getAllMakanan: (req, res) => {
    MakananModel.find({
      raw: true,
    })
      .then(result => {
        res.send({ message: "SUCCESS", result })
      })
      .catch(error => res.send(error));
  },

  getMakanan: (req, res) => {
    MakananModel
      .findOne({
        _id: req.params.id,
      })
      .then(result => {
        res.send({ message: "SUCCESS", result });
      })
      .catch((error) => res.send(error));
  },

addOne: (req, res) => {
  const{namaMakanan, unit, nilai, kalori, emisi, protein, carbon, fat} = req.body;
  MakananModel.create({
      namaMakanan,
      unit, 
      nilai, 
      kalori, 
      emisi, 
      protein, 
      carbon, 
      fat          
  }, (error, result) => {
      if(error) {
          res.status(400).json({
              message: "Gagal Menambahkan"
          })
      } else {
          res.status(200).json({
              message: "SUCCESS ADDED", result
          })
      }
  })
},

updateOne: async (req, res) => {
  const {namaMakanan, unit, nilai, kalori, emisi, protein, carbon, fat} = req.body;
  const makanan = await MakananModel.updateOne(
    { _id: req.params.id },
    { namaMakanan, unit, nilai, kalori, emisi, protein, carbon, fat },
    { new: true }
  );
  if (makanan) {
    res.send({
      message: "Update",
      makanan,
    });
  } else {
    res.send({
      message: "ERROR",
    });
  }
},

deleteOne: async (req, res) => {
  const makanan = await MakananModel.deleteOne({ _id: req.params.id }, { new: true });
  if (makanan) {
    res.send({
      message: "SUCCESS",
      MakananModel,
    });
  } else {
    res.send({ message: "ERROR" });
  }
},

}


