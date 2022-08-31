const Router = require('express')
const router = new Router()
const itemController = require("../controllers/itemController")

router.get('/get', itemController.getItems)

module.exports = router