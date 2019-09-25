const { Schema, model } = require("mongoose");
const UsersSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UsersSchema);
