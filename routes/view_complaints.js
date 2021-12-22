const express = require('express')
const router = express.Router()
const path = require('path')
const Blog = require('../models/blog')
const mongoose = require('mongoose')


router.get('/', (req, res) => {

    Blog.find().sort({ createdAt: -1})
    .then((result) => {
        res.render('view-complaints', {blogs: result})
    })
    .catch(err => {
        console.log(err)
    })
})

router.get('/:id', (req, res) => {
    Blog.findById('61968169a42b0fe64812828a')
    .then((result) => {
        //console.log(result)
         res.render('view-complaints', {blogs: result})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router