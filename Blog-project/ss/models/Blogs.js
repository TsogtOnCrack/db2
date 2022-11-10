const mongoose = require("mongoose")
const {Schema, model} = mongoose
const blogSchema = new Schema({
    author: Object,
    content : Object,
    comments : Array,
    title : Object,

    
}, { timestamps: true })

const Blogs = model("Blogs", blogSchema)

module.exports = Blogs