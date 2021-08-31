'use strict'

const express = require('express'),
    router = express.Router();
const TeamMembers = require('../models/getTMs')

router.get('/:leader?', async(req, res)=>{
    const id = req.params.leader
    const teammembers = await TeamMembers.getTMs(id)
    res.json(teammembers).status(200)
})

// router.post('/', async (req, res) => {
//     let response;
//     if (req.body.type === "UPDATE"){
//         response = await Leaders.editLeader()
//     }
//     else {
//         response = await Leaders.addLeader()
//     }
//     res.json(response).status(200)
// })

module.exports = router