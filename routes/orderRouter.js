const Router = require('express')
const router = new Router()
const orderController = require("../controllers/orderController")

router.get('/get', orderController.getOrders)

module.exports = router