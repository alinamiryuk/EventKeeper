const express = require('express')
const Note = require('../models/Note')
const errorHandler = require('../utils/errorHandler')
const router = express.Router()

router.post('/create', async (req, res) => {
  try {
    const note = new Note({
      creator: req.user.userID,
      title,
      text,
    })
    await note.save()
    res.status(201).json({ note })
  } catch (e) {
    errorHandler(e, res)
  }
})
