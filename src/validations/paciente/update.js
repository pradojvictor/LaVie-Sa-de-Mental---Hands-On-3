// const { validate, Joi } = require("express-validation");

// // const validPacienteExistis = async (value) => {
// //     const paciente = await Paciente.findOne({ where: { email: value } });
  
// //     if (paciente) {
// //       throw new Joi.ValidationError(
// //         "string.email",
// //         [
// //           {
// //             message: "Cliente already registered",
// //             path: ["email"],
// //             type: "string.email",
// //             context: {
// //               key: "email",
// //               label: "email",
// //               value,
// //             },
// //           },
// //         ],
// //         value
// //       );
// //     }
// //   };

// module.exports = validate({
//   body: Joi.object({
//     nome: Joi.string(),
//     email: Joi.string().email(), //.external(validPacienteExistis)
//     data_nascimento: Joi.date(),
    
//   }),
// });
