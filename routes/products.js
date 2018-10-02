const router = require('express').Router()
const { products: productsController } = require('../controllers')

router.get('/', productsController.find)

module.exports = router
