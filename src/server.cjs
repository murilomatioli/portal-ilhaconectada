const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const ArticleModel = require('./models/article.cjs');


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/projeto-portal")

app.get('/getUsers', (req, res) => {
    ArticleModel.find()
    .then(articles => res.json(articles))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
}).catch