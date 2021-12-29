const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const message = "Welcome Server vitQ"
    res.status(200).send(message)
})

module.exports = router