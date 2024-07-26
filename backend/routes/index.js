const router = require("express").Router()
const contestantRoute = require("./contestantRoutes")

router.use('/contestant', contestantRoute) 

module.exports = router