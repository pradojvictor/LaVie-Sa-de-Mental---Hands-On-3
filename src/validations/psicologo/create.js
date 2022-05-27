
const { validate, Joi } = require("express-validation");
const { validator } = require("email-validator");

const { Psicologo } = require("../../models");

const validPsicologoExistis = async (value) => {
  const psicologo = await Psicologo.findOne({ where: { email: value } });

  if (psicologo) {
    throw new Joi.ValidationError(
      "string.email",
      [
        {
          message: "Psicologo already registered",
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
    email: Joi.string().email().external(validPsicologoExistis).required(),
    senha: Joi.string().required(),
    apresentacao: Joi.string().required(),
  }),
});