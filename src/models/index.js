const db = require("../database/index");

const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");
const Atendimento = require("./Atendimento");

Psicologo.hasMany(Atendimento);
Paciente.hasMany(Atendimento);
Atendimento.belongsTo(Psicologo, {
  foreignKey: "psicologo_id",
});
Atendimento.belongsTo(Paciente, {
  foreignKey: "paciente_id",
});

module.exports = {
  Psicologo,
  Atendimento,
  Paciente,
};
