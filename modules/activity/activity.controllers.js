const ActivityModel = require("./activity.model")

module.exports = {
  getAllActivity: (req, res) => {
    ActivityModel.find({
      raw: true,
    })
      .then(result => {
        res.send({ message: "SUCCESS", result })
      })
      .catch(error => res.send(error));
  },

  getActivity: (req, res) => {
    ActivityModel
      .findOne({
        _id: req.activity.id,
      })
      .then(result => {
        res.send({ message: "SUCCESS", result });
      })
      .catch((error) => res.send(error));
  },

// addOne: (req, res) => {
//   const{namaAktivitas, petunjuk, manfaatKegiatan, manfaatKalori, manfaatEmisi, unit, nilai} = req.body;
//   ActivityModel.create({
//       namaAktivitas,
//       petunjuk,
//       manfaatKegiatan,
//       manfaatKalori,
//       manfaatEmisi,
//       unit,
//       nilai          
//   }, (error, result) => {
//       if(error) {
//           res.status(400).json({
//               message: "Gagal Menambahkan"
//           })
//       } else {
//           res.status(200).json({
//               message: "SUCCESS ADDED", result
//           })
//       }
//   })
// },

// updateOne: async (req, res) => {
//   const {namaAktivitas, petunjuk, manfaatKegiatan, manfaatKalori, manfaatEmisi, unit, nilai} = req.body;
//   const aktivitas = await ActivityModel.updateOne(
//     { _id: req.params.id },
//     { namaAktivitas, petunjuk, manfaatKegiatan, manfaatKalori, manfaatEmisi, unit, nilai },
//     { new: true }
//   );
//   if (aktivitas) {
//     res.send({
//       message: "Update",
//       aktivitas,
//     });
//   } else {
//     res.send({
//       message: "ERROR",
//     });
//   }
// },

// deleteOne: async (req, res) => {
//   const aktivitas = await AktivitasModel.deleteOne({ _id: req.params.id }, { new: true });
//   if (aktivitas) {
//     res.send({
//       message: "SUCCESS",
//       AktivitasModel,
//     });
//   } else {
//     res.send({ message: "ERROR" });
//   }
// },

}


