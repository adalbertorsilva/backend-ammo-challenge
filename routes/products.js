const router = require('express').Router()
const { products: productsController } = require('../controllers')
const { params_validation: paramsValidationMiddleware } = require('../middlewares')

router.use(paramsValidationMiddleware.validateRequest)
router.get('/', productsController.find)

module.exports = router
