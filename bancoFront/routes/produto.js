const express = require("express")
const router = express.Router()
const upload = require("../config/multer")
const ProdutoControler = require("../controllers/produtoController")


router.post("/", upload.single("file"), ProdutoControler.create)
router.put("/:id", ProdutoControler.update)
router.get("/", ProdutoControler.getAll);
router.delete("/:id", ProdutoControler.delete)


module.exports = router