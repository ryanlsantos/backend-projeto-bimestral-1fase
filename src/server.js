const express = require("express");
const mongoose = require("mongoose"); // ODM - Object Data Mapping

const server = express();
server.use(express.json());
// Conexão com o banco de dados (projetobimestral)
mongoose.connect("mongodb://localhost:27017/projetobimestral", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const routes = require("./routes");

server.use(routes);

server.listen(3333);
