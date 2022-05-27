const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");
const Atendimento = require("./Atendimento");
const Login = require("./Login");

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
  Login,
};
