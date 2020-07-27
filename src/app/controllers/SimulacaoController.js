const connection = require("../database/connection");

class SimulacaoController {
  async index(req, res) {
    const { idPlans, period, idTariff } = req.body;
    const [plano] = await connection("plans")
      .where({
        id: idPlans,
      })
      .select("period");

    if (!plano) {
      return res.status(200).json({ Error: "Plano não Localizado." });
    }

    const [price] = await connection("tariff")
      .where({
        id: idTariff,
      })
      .select("*");

    if (!price) {
      return res.status(200).json({ Error: "Valor da Tarifa não Localizado." });
    }

    const tarifa = price.price;

    const periodPlans = plano.period;

    function calculateFaleMais(plans, period, tariff) {
      if (plans > period) {
        return 0;
      } else {
        let over = period - plans;
        return over * (tariff * 1.1);
      }
    }

    function calculateSemFaleMais(period, tariff) {
      return period * tariff;
    }

    let comFaleMais = calculateFaleMais(periodPlans, period, tarifa);
    let semFaleMais = calculateSemFaleMais(period, tarifa);

    return res.json({
      origin: price.origin,
      destiny: price.destiny,
      periodPlans,
      period,
      tarifa,
      comFaleMais,
      semFaleMais,
    });
  }
}

module.exports = new SimulacaoController();
