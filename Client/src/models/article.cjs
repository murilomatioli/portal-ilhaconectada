const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    content: String,
})

const ArticleModel = mongoose.model("articles", articleSchema)
module.exports = ArticleModel