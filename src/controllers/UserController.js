const Usuarios = require("../models/User");

module.exports = {
  async store(req, res) {
    const usuario = await Usuarios.create(req.body);
    return res.json(usuario);
  },
  async index(req, res) {
    const usuario = await Usuarios.findOne({ email: req.params.email });
    if (usuario != null) {
      return res.json(usuario);
    } else {
      return res.json({
        message: "Nenhum dado foi encontrado!"
      });
    }
  },
};
