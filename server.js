const http = require('http')
const app = require('./app')
const mongoose = require('mongoose')
const config = require('config')

const PORT = config.get('port') || 4100
const server = http.createServer(app)
const DB_KEY = config.get('dbkey')

server.listen(PORT, (err) => {
  if (err) console.log(err) 
  console.log(`port ${PORT}`)
  mongoose.connect(DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
})
