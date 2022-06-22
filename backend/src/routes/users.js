const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Look = require('../models/look')
const Product = require('../models/product')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.email) {
    query.email = req.query.email
  }

  if (req.query.name) {
    query.name = req.query.name
  }

  // if (req.query.lastName) {
  //   query.lastName = req.query.lastName
  // }

  res.send(await User.find(query))
})

/* POST create a user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

/* DELETE users */
router.delete('/', async (req, res) => {
  await User.deleteMany({})

  res.sendStatus(200)
})

/* DELETE a user */
router.delete('/byEmail/:email', async (req, res) => {
  console.log(req.params.email)

  await User.deleteOne({ email: req.params.email })

  res.sendStatus(200)
})

router.get('/initialize', async (req, res) => {
  //temporary delete for development
  await User.deleteMany({})
  await Product.deleteMany({})
  await Look.deleteMany({})

  const mihri = await User.create({
    name: 'mihri',
    // lastName: 'mihri',
    email: 'mihri@mihri.com',
  })
  await mihri.setPassword('test')
  await mihri.save()

  const armagan = await User.create({
    name: 'armagan',
    // lastName: 'armagan',
    email: 'armagan@armagan.com',
  })
  await armagan.setPassword('test')
  await armagan.save()

  const steve = await User.create({
    name: 'steve',
    // lastName: 'steve',
    email: 'steve@steve.com',
  })
  steve.bio = 'An amazing fashionista with an eye for detail'
  await steve.setPassword('test')
  await steve.save()

  const versaceGown = await Product.create({
    name: 'versace',
    category: 'evening dress',
  })
  const armaniTuxedo = await Product.create({
    name: 'armani',
    category: 'tuxedo',
  })

  versaceGown.setCoordinates(100, 100) //doesnt work

  const metGalaLook = await Look.create({
    name: 'Evening At the Met Gala',
    product: versaceGown,
  })

  await steve.favoriteAProduct(versaceGown)
  await steve.favoriteAProduct(armaniTuxedo)

  await mihri.addLook(metGalaLook) //doesnt work

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

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.send(user)
  else res.sendStatus(404)
})

router.get('/:userId/json', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.send(user)
  else res.sendStatus(404)
})

module.exports = router
