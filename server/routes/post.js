'use strict'
const express = require('express'),
    router = express.Router();
const Blogs = require('../models/getBlogs')

router.get('/:name?', async (req, res)=> {
    const id = req.params.name
    const blogPost = await Blogs.getABlog(id)
    res.json(blogPost).status(200)
})

module.exports = router;