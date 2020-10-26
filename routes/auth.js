const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const { issueJWT } = require('../utils/issueJWT')
const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { userName, email } = req.body
    const newUserNameCheck = await User.findOne({ userName })
    const newUserEmailCheck = await User.findOne({ email })
    if (newUserNameCheck) {
      res.status(409).json({
        message: 'User already exists. Change your username!',
      })
    } else if (newUserEmailCheck) {
      res.status(409).json({
        message: 'User already exists. Change your email!',
      })
    } else {
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      })
      await user.save()

      const token = issueJWT(user)
      res.status(200).json({
        token,
        username: userName,
        success: true,
      })
    }
  } catch (e) {
    errorHandler(e, res)
  }
})

router.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body
    await User.findOne({
      userName,
    }).then((user) => {
      if (!user) {
        res.status(401).json({ success: false, msg: 'Could not find user!' })
      }
      if (bcrypt.compareSync(password, user.password)) {
        const token = issueJWT(user)
        res.status(200).json({
          token,
          username: userName,
          success: true,
        })
      } else {
        res
          .status(401)
          .json({ success: false, msg: 'You entered the wrong password!' })
      }
    })
  } catch (e) {
    errorHandler(res, e)
  }
})

module.exports = router
