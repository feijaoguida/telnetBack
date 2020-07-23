const express = require("express");

const SimulateController = require("./app/controllers/SimulateController");
const SimulacaoController = require("./app/controllers/SimulacaoController");
const UserController = require("./app/controllers/UserController");
const PlansController = require("./app/controllers/PlansController");
const TariffController = require("./app/controllers/TariffController");

const routes = express.Router();

routes.get("/simulate", SimulateController.index);

routes.get("/simulacao", SimulacaoController.index);

routes.get("/user", UserController.index);
routes.post("/user", UserController.create);
routes.delete("/user/:id", UserController.delete);

routes.get("/plans", PlansController.index);
routes.post("/plans", PlansController.create);
routes.delete("/plans/:id", PlansController.delete);

routes.get("/tariff", TariffController.index);
routes.post("/tariff", TariffController.create);

module.exports = routes;
