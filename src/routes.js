const express = require("express");

const SimulateController = require("./app/controllers/SimulateController");
const SimulacaoController = require("./app/controllers/SimulacaoController");
const UserController = require("./app/controllers/UserController");
const PlansController = require("./app/controllers/PlansController");
const TariffController = require("./app/controllers/TariffController");
const SessionController = require("./app/controllers/SessionController");

const routes = express.Router();

const authMiddleware = require("./app/middlewares/auth");

routes.post("/session", SessionController.create);

routes.get("/user", UserController.index);
routes.post("/user", UserController.create);

routes.use(authMiddleware);

routes.delete("/user/:id", UserController.delete);

routes.get("/plans", PlansController.index);
routes.post("/plans", PlansController.create);
routes.delete("/plans/:id", PlansController.delete);

routes.get("/tariff", TariffController.index);
routes.post("/tariff", TariffController.create);

routes.get("/simulate", SimulateController.index);

routes.get("/simulacao", SimulacaoController.index);

module.exports = routes;
