class SimulateController {
  async index(req, res) {
    const { plans, period, origin, destiny, tariff } = req.body;

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

    let comFaleMais = calculateFaleMais(plans, period, tariff);
    let semFaleMais = calculateSemFaleMais(plans, tariff);

    return res.json({
      origin,
      destiny,
      period,
      plans,
      tariff,
      comFaleMais,
      semFaleMais,
    });
  }
}

module.exports = new SimulateController();
