const mongoose = require('mongoose')

const projetoSchema = new mongoose.Schema ({
    title:String,
    description:String,
    content:String,
    author:String,
    image: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model("projetos",projetoSchema)