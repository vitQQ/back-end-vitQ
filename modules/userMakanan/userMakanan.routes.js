const express = require("express");
const router = express.Router();
const authenticateJWT = require("../../helpers");

const {
  getAll,
  addOne,
  updateOne,
  deleteOne,
  getUser,
} = require("./userMakanan.controllers");

router.get("/", authenticateJWT, getAll);
router.get("/:id", getUser);
router.post("/", authenticateJWT, addOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;
