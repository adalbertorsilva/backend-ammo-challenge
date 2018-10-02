const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).send({ message: 'I have a list of products' })
})

module.exports = router
