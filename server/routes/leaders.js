'use strict'

const express = require('express'),
    router = express.Router();
const Leaders = require('../models/getLeaders')

router.get('/:leader?', async(req, res)=>{
    const email = req.params.leader
    const leaders = await Leaders.getLeaders(email)
    res.json(leaders).status(200)
})

router.post('/', async (req, res) => {
    let response;
    if (req.body.type === "UPDATE"){
        response = await Leaders.editLeader()
    }
    else {
        response = await Leaders.addLeader()
    }
    res.json(response).status(200)
})

module.exports = router