'use strict'

const express = require('express'),
    router = express.Router();
const Templates = require('../models/getTemplates')

router.get('/', async(req, res)=>{
    const leaders = await Templates.getTemplates()
    res.json(leaders).status(200)
})

router.post('/', async (req, res) => {
    let response;
    if (req.body.type === "UPDATE"){
        response = await Templates.editTemplate()
    }
    else {
        response = await Templates.addTemplate()
    }
    res.json(response).status(200)
})

module.exports = router