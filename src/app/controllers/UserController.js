const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const users = await connection("user").select("*");

    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password, validatePassword } = req.body;

    if (password !== validatePassword) {
      return res
        .status(400)
        .json({ Error: "Senha não confere com a validação." });
    }
    const [id] = await connection("user").insert({
      name,
      email,
      password,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;

    await connection("user").where({ id: id }).del();

    return res.json(id + "Excluido com sucesso").status(200);
  },
};
