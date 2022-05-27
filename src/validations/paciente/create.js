const { validate, Joi } = require("express-validation");
// const { validator } = require("email-validator");

const { Paciente } = require("../../models");

const validPacienteExistis = async (value) => {
  const paciente = await Paciente.findOne({ where: { email: value } });

  if (paciente) {
    throw new Joi.ValidationError(
      "string.email",
      [
        {
          message: "Paciente already registered",
          path: ["email"],
          type: "string.email",
          context: {
            key: "email",
            label: "email",
            value,
          },
        },
      ],
      value
    );
  }
};

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().external(validPacienteExistis).required(),
    data_nascimento: Joi.date().required(),
  }),
});