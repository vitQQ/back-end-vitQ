const UserActivityModel = require("./userActivity.models")

module.exports = {
    getAll: async (req, res) => {
        try{
            const usty = await UserActivityModel.find()
            .populate("id_user")
            .populate("id_activity");
            res.status(200).send({message: "OK", data: usty});
        } catch (error) {
          res.status(500).send(error.message);
        }
        },

  
    getUser: async (req, res) => {
      try{
        const useract = await UserActivityModel.findOne({_id: req.params.id})
        .populate("id_user")
        .populate("id_activity")
        res.status(200).send({message: "OK", data: useract});
      } catch (error) {
        res.status(500).send(error.message);
      }
    },
  
    addOne: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const date_time = Date.now()
        UserActivityModel.create({
            id_user : req.UserModel.id,
            id_activity : req.Activity.id,
            date_time : date_time,
            thumbnail_url : body.thumbnail_url
        },
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
      const {thumbnail_url } = req.body;
      const useAct = await UserActivityModel.updateOne(
        { _id: req.params.id },
        { thumbnail_url },
        { new: true }
      );
      if (useAct) {
        res.send({
          message: "SUCCESS",
          useAct,
        });
      } else {
        res.send({
          message: "ERROR",
        });
      }
    },
  
    deleteOne: async (req, res) => {
      const useAct = await UserActivityModel.deleteOne({ _id: req.params.id }, { new: true });
      if (useAct) {
        res.send({
          message: "SUCCESS",
          UserActivityModel,
        });
      } else {
        res.send({ message: "ERROR" });
      }
    },
  };
  