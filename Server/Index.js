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


app.patch("/projetos/:id", async(req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const projeto = await Projeto.findById(id);
        if (!projeto) {
            return res.status(404).json({ message: "Projeto não encontrado" });
        }
        projeto.title = title;
        projeto.description = description;
        const projetoAtualizado = await projeto.save();
        res.json(projetoAtualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete("/projetos", async (req, res) => {
    try {
        const result = await Projeto.deleteMany({});
        res.json({ message: `${result.deletedCount} projetos excluídos com sucesso` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete("/projetos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const projeto = await Projeto.findByIdAndDelete(id);
        if (!projeto) {
            return res.status(404).json({ message: "Projeto não encontrado" });
        }
        res.json({ message: "Projeto excluído com sucesso" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get("/projetos/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const projeto = await Projeto.findById(id);
        if (!projeto) {
            return res.status(404).json({ message: "Projeto não encontrado" });
        }
        res.json(projeto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




app.post("/projetos", async(req, res) => {
    const { title, description, content, author } = req.body;
    try {
        const novoProjeto = new Projeto({ title, description, content, author });
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