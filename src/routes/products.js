const express = require('express')

const router = express.Router()
const Product = require('../models/product')

/* GET products listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Product.find(query))
})

/* POST create a product */
router.post('/', async (req, res) => {
  const createdProduct = await Product.create(req.body)
  res.send(createdProduct)
})

/* DELETE products */
router.delete('/', async (req, res) => {
  await Product.deleteMany({})

  res.sendStatus(200)
})

/* DELETE a product */
router.delete('/byName/:name', async (req, res) => {
  console.log(req.params.name)

  await Product.deleteOne({ name: req.params.name })

  res.sendStatus(200)
})

module.exports = router
