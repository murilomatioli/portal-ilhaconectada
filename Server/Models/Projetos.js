const mongoose = require('mongoose')

const projetoSchema = new mongoose.Schema ({
    title:String,
    description:String
})

module.exports = mongoose.model("projetos",projetoSchema)