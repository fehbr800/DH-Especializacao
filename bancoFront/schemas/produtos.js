const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Produto", ProdutoSchema);
