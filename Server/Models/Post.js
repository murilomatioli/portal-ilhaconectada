const mongoose = require('mongoose')

const postSchema = new mongoose.Schema ({
    content:String
})

module.exports = mongoose.model("posts",postSchema)