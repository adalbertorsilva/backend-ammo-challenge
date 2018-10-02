const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { products } = require('../routes')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))
app.use('/api/products', products)

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Unknown Route' })
})

module.exports = app
