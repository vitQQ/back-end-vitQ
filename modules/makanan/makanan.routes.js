const express = require('express')
const router = express.Router();
const {getAllMakanan, getMakanan, addOne, updateOne, deleteOne} = require("./makanan.controllers")

router.get('/', getAllMakanan)
router.get('/:id', getMakanan)
router.post('/', addOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)

module.exports = router;