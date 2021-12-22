const mongoose = require('mongoose')

// schema defines the structure of a document
const Schema = mongoose.Schema

const blogSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
    
}, {timestamps: true})

// creates a model based on the schema (with a name of the collection)
const Blog = mongoose.model('complaints', blogSchema)

module.exports = Blog