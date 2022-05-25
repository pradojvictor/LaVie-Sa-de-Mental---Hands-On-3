const Psicologo = require("./Psicologo");
const Paciente = require("./Paciente");
const Atendimento = require("./Atendimento");

Psicologo.hasMany(Atendimento);
Paciente.hasMany(Atendimento);
Atendimento.belongsTo(Psicologo);
Atendimento.belongsTo(Paciente);

// Endereco.belongsTo(Cliente, {
//   foreignKey: "cliente_codigo",
// });

// Filme.belongsToMany(Genero, {
//   foreignKey: "filme_codigo",
//   through: FilmeGenero,
// });
// Filme.hasMany(ReservaFilme);

// Genero.belongsToMany(Filme, {
//   foreignKey: "genero_codigo",
//   through: FilmeGenero,
// });

// Reserva.hasMany(ReservaFilme);
// Reserva.belongsTo(Cliente, {
//   foreignKey: "cliente_codigo",
// });

// ReservaFilme.belongsTo(Reserva, {
//   foreignKey: "reserva_codigo",
// });
// ReservaFilme.belongsTo(Filme, {
//   foreignKey: "filme_codigo",
// });

module.exports = {
  Psicologo,
  Atendimento,
  Paciente,
};
