const express = require("express");
const app = express();
const cors = require("cors")


require("dotenv").config();
require("./db")

const PORT = process.env.PORT || 3333;


// Importar o modelo do produto
const produtoRouter = require("./routes/produto")

// Analisar o corpo das solicitações como JSON
app.use(express.json());
app.use(cors())
app.use("/produto", produtoRouter)



app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
