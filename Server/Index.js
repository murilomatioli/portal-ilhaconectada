const express = require('express');
const app = express();
app.use(express.json())

const cors = require('cors')
app.use(cors());

require('./db/connection');
const Post = require('./Models/Post')
const Projeto = require('./Models/Projetos');


app.get("/projetos", async(req, res) => {
    try {
        const projetos = await Projeto.find();
        res.json(projetos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/projetos", async(req, res) => {
    const { title, description } = req.body;
    try {
        const novoProjeto = new Projeto({ title, description });
        const projetoSalvo = await novoProjeto.save();
        res.status(201).json(projetoSalvo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.post("/", async(req,res)=> {
    let post = new Post(req.body);
    let result = await post.save();
    res.send(result)
})

app.listen(4000);