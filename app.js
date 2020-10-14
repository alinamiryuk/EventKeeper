const express = require('express')

const app = express()

const authRouter = require('./routes/auth')

app.use(express.json({ extended: true }))
app.use('/api/auth', authRouter)

module.exports = app
