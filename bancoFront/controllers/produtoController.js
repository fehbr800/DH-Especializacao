const Produto = require("../schemas/produtos")

exports.create = async (req, res) => {
  try {
    const { nome, categoria, preco, descricao } = req.body;
    const file = req.file;

    const produto = new Produto({
      nome,
      categoria,
      img: file.path,
      preco,
      descricao,
    });

    await produto.save();
    res.status(201).json({ produto, message: "Produto criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o produto" });
  }
};

// Read - Obtém todos os produtos
exports.getAll = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os produtos" });
  }
};

// Read - Obtém um produto por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findById(id);
    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter o produto" });
  }
};

// Update - Atualiza um produto por ID
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, categoria, preco, descricao } = req.body;
    const file = req.file;

    const produto = await Produto.findByIdAndUpdate(
     id,
      {
        nome,
        categoria,
        img: file.path,
        preco,
        descricao,
      },
      { new: true }
    );

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json({ produto, message: "Produto atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o produto" });
  }
};

// Delete - Exclui um produto por ID
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByIdAndDelete(id);
    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.json({ message: "Produto excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o produto" });
  }
};
