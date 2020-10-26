const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

const authRouter = require('./routes/auth')

app.use(morgan('dev'))
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', authRouter)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'frontend', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

module.exports = app
