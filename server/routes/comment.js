'use strict'

const express = require('express'),
    router = express.Router();
const Blogs = require('../models/getBlogs')

router.get('/:id?', async(req, res)=>{
    const id = req.params.id
    const comments = await Blogs.getComments(id)
    res.json(comments).status(200)
})

router.post('/', async (req, res) => {
    await Blogs.postComment(req.body.blog_id, req.body.comment)
})

module.exports = router