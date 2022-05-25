//sets the groundwork / glueing togther all authtication related codework - set up base for express-sessions(to create and save sessions), connect-mongo (to store theses session data in MongoDB), initialising passport for authentication.

const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/user')

require('./database-connection')

//to connect mongodb to connect-mongo library
const clientPromise = mongoose.connection.asPromise().then(connection => connection.getClient())
const socketService = require('./socket-service')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const productsRouter = require('./routes/products')
const accountRouter = require('./routes/account')

const app = express()

//cors allows different domains to interact with each other. normally this would be a security issue and only trusted domains should be allowed to make requests on our domains.
app.use(
  cors({
    // allow any domain to request our domain
    origin: true,
    // to be able to recieve cookies
    credentials: true,
  })
)

if (app.get('env') == 'development') {
  /* eslint-disable-next-line */
  app.use(require('connect-livereload')())
  /* eslint-disable-next-line */
  require('livereload')
    .createServer({ extraExts: ['pug'] })
    .watch([`${__dirname}/public`, `${__dirname}/views`])
}

//proxy here is the google cloud load balancer that is managinf the FE, BE. We're telling the session's secure property to trust the proxy as it will be operating on HTTPs and not just http traffic that the BE is currently operating on.
app.set('trust proxy', 1)

app.set('io', socketService)

// view engine setup - express lets us set global variables using app.set/app.get that can be used anywhere.
//therefore any file that has access to app will be able to use the views files.
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//declaring a new session
app.use(
  session({
    secret: ['thisisnotasupersecuresecretsecret', 'thisisanothersupernotsosecretsecret'],
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({ clientPromise, stringify: false }),
    cookie: {
      //to ensure persistant data
      maxAge: 30 * 24 * 60 * 60 * 1000,
      //to make it more secure, establish path not on entire domain
      path: '/api',
      sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'strict',
      secure: process.env.NODE_ENV == 'production',
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

//strategy: which option to use for authentication, there are around 500, for example, google/fb authentication, etc. Here we use the passport-local-mongooses strategy (required in the user schema model)
passport.use(User.createStrategy())

//to assign unique ids to user account for sessions.
passport.serializeUser(User.serializeUser())
//to extract user data from db using only the id
passport.deserializeUser(User.deserializeUser())

app.use(express.static(path.join(__dirname, 'public')))

//using the session
app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  req.session.viewCount++
  next()
})

app.use('/api/', indexRouter)
app.use('/api/account', accountRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)

  res.send({
    status: err.status,
    message: err.message,
    stack: req.app.get('env') == 'development' ? err.stack : '',
  })
})

module.exports = app
