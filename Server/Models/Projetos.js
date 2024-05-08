const mongoose = require('mongoose');

const projetoSchema = new mongoose.Schema ({
    title: String,
    description: String,
    content: String,
    author: String,
    images: [
        {
            data: Buffer,
            contentType: String
        }
    ]
});

module.exports = mongoose.model("projetos", projetoSchema);
