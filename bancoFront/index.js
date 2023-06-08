const express = require("express");
const app = express();


require("dotenv").config();
require("./db")

const port = process.env.PORT || 3000;


// Importar o modelo do produto
const produtoRouter = require("./routes/produto")

// Analisar o corpo das solicitações como JSON
app.use(express.json());

app.use("/produto", produtoRouter)


app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
