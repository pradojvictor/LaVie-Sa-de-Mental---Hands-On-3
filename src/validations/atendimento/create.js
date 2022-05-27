const { validate, Joi } = require("express-validation");

const { Paciente } = require("../../models");

// const validPacienteExistis = async (value) => {
//   const paciente = await Paciente.findOne({ where: { email: value } });

//   if (paciente) {
//     throw new Joi.ValidationError(
//       "string.email",
//       [
//         {
//           message: "Paciente already registered",
//           path: ["email"],
//           type: "string.email",
//           context: {
//             key: "email",
//             label: "email",
//             value,
//           },
//         },
//       ],
//       value
//     );
//   }
// };

module.exports = validate({
  body: Joi.object({
    paciente_id: Joi.number().required(),
    psicologo_id: Joi.number().required(), 
    data_atendimento: Joi.date().required(),
    observacao: Joi.string().required(),
  }),
});