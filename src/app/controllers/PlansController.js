const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const plans = await connection("plans").select("*");

    return res.json(plans);
  },

  async create(req, res) {
    const { description, period } = req.body;

    const [id] = await connection("plans").insert({
      description,
      period,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;

    await connection("plans").where({ id: id }).del();

    return res.json("O Registro " + id + " Excluido com sucesso").status(200);
  },
};
