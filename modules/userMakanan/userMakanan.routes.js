const express = require('express')
const router = express.Router();

const{getAll, addOne, updateOne, deleteOne, getUser} = require('./userMakanan.controllers')

router.get('/', getAll)
router.get('/:id', getUser)
router.post('/', addOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)


module.exports = router