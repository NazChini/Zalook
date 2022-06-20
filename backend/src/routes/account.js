const express = require('express')
const passport = require('passport')

const User = require('../models/user')

const router = express.Router()

router.get('/session', (req, res) => {
  res.send(req.user)
  console.log(`I am a session`)
})

router.post('/', async (req, res, next) => {
  // const { name, lastName, email, password } = req.body
  const { name, email, password } = req.body

  try {
    // const user = await User.register({ name, lastName, email }, password)
    const user = await User.register({ name, email }, password)
    res.send(user)
  } catch (e) {
    next(e)
  }
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async (req, res) => {
  res.send(req.user)
})

router.delete('/session', async (req, res, next) => {
  await req.logout()

  //security measure to give user completely new session when he logs out to make him truly anonymous.
  req.session.regenerate(err => {
    if (err) return next(err)

    return res.sendStatus(200)
  })
})

module.exports = router
