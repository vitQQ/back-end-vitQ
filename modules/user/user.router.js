const express = require("express");
const router = express.Router();
const authenticateJWT = require("../../helpers");

const{getAll, addOne, updateOne, deleteOne, getUser, loginByGoogle} = require('./user.controllers')

router.get('/', authenticateJWT ,getAll)
router.get('/:id', getUser)
router.post('/', addOne)
router.post('/',loginByGoogle)
router.delete('/:id', deleteOne)
router.put("/", authenticateJWT, updateOne);

module.exports = router;
