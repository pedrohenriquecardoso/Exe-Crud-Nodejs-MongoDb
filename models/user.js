const mongoose = require("mongoose");

const user = mongoose.model("user", {
    nome: String,
    senha: String,
    exemplo3: Boolean
});

module.exports = user;