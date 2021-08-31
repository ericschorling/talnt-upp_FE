'use strict'

const express = require('express'),
    router = express.Router();
const Notes = require('../models/getNotes')

router.get('/', async(req, res)=>{
    const notes = await Notes.getAllNotes()
    res.json(notes).status(200)
})
module.exports = router