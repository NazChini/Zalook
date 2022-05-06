const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Look = require('../models/look')
const Product = require('../models/product')

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  //temporary delete for development
  await User.deleteMany({})
  await Product.deleteMany({})
  await Look.deleteMany({})

  const mihri = await User.create({
    firstName: 'mihri',
    lastName: 'mihri',
    email: 'mihri@mihri.com',
    password: 'password',
  })
  const armagan = await User.create({
    firstName: 'armagan',
    lastName: 'armagan',
    email: 'armagan@armagan.com',
    password: 'password',
  })

  const steve = await User.create({
    firstName: 'steve',
    lastName: 'steve',
    email: 'steve@steve.com',
    password: 'password',
  })
  steve.bio = 'An amazing fashionista with an eye for detail'

  const versaceGown = await Product.create({ name: 'versace', category: 'evening dress' })
  const armaniTuxedo = await Product.create({ name: 'armani', category: 'tuxedo' })

  versaceGown.setCoordinates(100, 100)

  const metGalaLook = await Look.create({
    name: 'Evening At the Met Gala',
    product: versaceGown,
  })

  await steve.favoriteAProduct(versaceGown)
  await steve.favoriteAProduct(armaniTuxedo)

  await mihri.addLook(metGalaLook)

  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
