const connection = require("../database/connection");

class SimulacaoController {
  async index(req, res) {
    const { IdPlans, period, origin, destiny } = req.body;

    const [plano] = await connection("plans")
      .where({
        id: IdPlans,
      })
      .select("period");

    const [price] = await connection("tariff")
      .where({
        origin: origin,
        destiny: destiny,
      })
      .select("price");

    const tarifa = price.price;
    const periodPlans = plano.period;

    function calculateFaleMais(plans, period, tariff) {
      console.log("Falemais " + plans);
      console.log("tariff : " + tariff);
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
      origin,
      destiny,
      periodPlans,
      period,
      tarifa,
      comFaleMais,
      semFaleMais,
    });
  }
}

module.exports = new SimulacaoController();
