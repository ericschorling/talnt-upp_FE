'use strict'

const express = require('express'),
    router = express.Router();
const Notes = require('../models/getNotes')

router.get('/:tm?', async(req, res)=>{
    const id = req.params.tm
    const notes = await Notes.getNotes(id)
    res.json(notes).status(200)
})

router.post('/', async (req, res) => {
    const response = await Notes.addNote(req.body.note)
    res.json(response).status(200)
})

module.exports = router