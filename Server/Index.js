const express = require('express');
const app = express();
app.use(express.json())

require('./db/connection');
const Post = require('./Models/Post')
app.post("/", async(req,res)=> {
    let post = new Post(req.body);
    let result = await post.save();
    res.send(result)
})

app.listen(4000);