const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000
const server = http.createServer(app)

server.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`port ${PORT}`)
})
