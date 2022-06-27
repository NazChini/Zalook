const express = require('express')

const router = express.Router()

const Look = require('../models/look')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await Look.find(query))
})

/* POST create a look */
router.post('/', async (req, res) => {
  const createdLook = await Look.create(req.body)
  res.send(createdLook)
})

/* DELETE looks */
router.delete('/', async (req, res) => {
  await Look.deleteMany({})

  res.sendStatus(200)
})

/* DELETE a look */
router.delete('/byName/:name', async (req, res) => {
  console.log(req.params.name)

  await Look.deleteOne({ name: req.params.name })

  res.sendStatus(200)
})

router.get('/initialize', async (req, res) => {
  //temporary delete for development
  await Look.deleteMany({})

  const versaceGown = await Product.create({
    name: 'versace',
    category: 'evening dress',
  })
  const armaniTuxedo = await Product.create({
    name: 'armani',
    category: 'tuxedo',
  })

  const metGalaLook = await Look.create({
    name: 'Evening At the Met Gala',
    product: versaceGown,
  })

  res.sendStatus(200)
})

// router.post('/:userId/looks', async (req, res) => {
//   const user = await User.findById(req.params.userId)
//   const look = await Look.findById(req.body.lookId)

//   await user.addPhoto(photo)
//   res.sendStatus(200)
// })

// router.post('/:userId/products', async (req, res) => {
//   const user = await User.findById(req.params.userId)
//   const product = await Product.findById(req.body.productId)

//   await user.likePhoto(photo)
//   res.sendStatus(200)
// })

router.get('/:lookId', async (req, res) => {
  const look = await Look.findById(req.params.lookId)

  if (look) res.send(look)
  else res.sendStatus(404)
})

router.get('/:lookId/json', async (req, res) => {
  const user = await Look.findById(req.params.lookId)

  if (look) res.send(look)
  else res.sendStatus(404)
})

module.exports = router
