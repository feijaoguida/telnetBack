const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const tarrif = await connection("tariff").select("*");

    return res.json(tarrif);
  },

  async create(req, res) {
    const { origin, destiny, price } = req.body;

    const [id] = await connection("tariff").insert({
      origin,
      destiny,
      price,
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;

    await connection("tariff").where({ id: id }).del();

    return res.json("O Registro " + id + " Excluido com sucesso").status(200);
  },
};
