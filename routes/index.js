const Router = require('express')
const router = new Router()
const itemRouter = require("./itemRouter")
const orderRouter = require("./orderRouter")

router.use('/item', itemRouter)
router.use('/order', orderRouter)

module.exports = router