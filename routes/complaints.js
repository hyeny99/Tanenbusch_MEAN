const express = require('express')
const router = express.Router()
const path = require('path')
const Blog = require('../models/blog')


router.get('/', (req, res) => {
    res.status(200).render('post-complaint')
})


router.post('/', (req, res) => {
    const blog = new Blog({
        location: req.body.location,
        reason: req.body.reason,
        message: req.body.message,
        img: req.body.img
    })
    
    blog.save()
    .then((result) => {
        console.log(result)
        res.status(200).render('submit-complaint')
    })
    .catch((error) => {
        console.log(error)
        res.status(401).render('homepage')
    })
    
})


module.exports = router