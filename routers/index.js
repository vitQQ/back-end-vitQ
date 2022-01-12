const express = require("express");
const router = express.Router();
const {rootRouterMd, rootRouterGet, rootRouterPost} = require("./rootRouter")
const user = require("../modules/user/user.router")

router.get("/", (req, res) => {
    const message = "Welcome Server vitQ"
    res.status(200).send(message)
})

// eval()
//USE
rootRouterMd.map(e => (
    router.use(e.path, e.handler)
))

//GET
rootRouterPost.map(e => (
    router.post(e.path, e.handler)
))


module.exports = router