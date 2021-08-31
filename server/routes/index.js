'use strict'
const express = require('express'),
    router = express.Router();
const Blogs = require('../models/getBlogs')

router.get('/', async(req, res) =>{
    const blogs = await Blogs.getBlogLogs()
    console.log(blogs)
    res.json(blogs).status(200)
})

router.post('/', async(req, res) =>{
    console.log(req.body)
    Blogs.addBlogPost(req.body.user_id, req.body.blog)
})

module.exports = router;