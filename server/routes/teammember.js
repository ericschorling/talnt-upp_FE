'use strict'

const express = require('express'),
    router = express.Router();
const TeamMembers = require('../models/getTMs')

router.get('/:tmname?', async(req, res)=>{
    const name = req.params.tmname
    const teammembers = await TeamMembers.getTMInfo(name)
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