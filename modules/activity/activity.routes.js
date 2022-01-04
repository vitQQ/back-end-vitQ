const express = require('express')
const router = express.Router();
const {getAllActivity, getActivity} = require("./activity.controllers")

router.get('/', getAllActivity)
router.get('/:id', getActivity)
// router.post('/', addOne)
// router.put('/', updateOne)
// router.delete('/:id', deleteOne)

module.exports = router;