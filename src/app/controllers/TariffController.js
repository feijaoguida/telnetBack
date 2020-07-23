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
};
