const { Router } = require("express");
const routes = Router();

const UserController = require("./controllers/UserController");

// GET, POST, PUT e o DELETE

routes.post("/usuario", UserController.store);
routes.get("/usuario/:email", UserController.index);

module.exports = routes;
