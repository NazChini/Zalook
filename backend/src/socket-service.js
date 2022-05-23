const io = require('socket.io')()

io.on('hello world', socket => {
  socket.emit('hello world')

  setInterval(() => {
    socket.emit('hello world')
  }, 2000)
})
module.exports = io
