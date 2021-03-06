const { } = require("sequelize");

const { Atendimento, Paciente, Psicologo } = require("../models");

const AtendimentoController = {
  async index(req, res) {
    try {
      const index = await Atendimento.findAll({ include: [Paciente, 
        {
        model: Psicologo,
        attributes: ["id", "nome", "email", "apresentacao"]
        }
    ]}); 

      res.json(index);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  async store(req, res) {
    try {
      const { data_atendimento, observacao, paciente_id } = req.body;
      const { id } = req.auth;

      const newStore = await Atendimento.create({
        paciente_id,
        psicologo_id: id,
        data_atendimento,
        observacao,
      });

      res.json(newStore)

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  async show(req, res) {
    try {
        const { id } = req.params;
        const atendimento = await Atendimento.findByPk(id, { include: [Paciente,
        {
          model: Psicologo,
          attributes: ["id", "nome", "email", "apresentacao"]
        }
    ]} );

        if(atendimento){
          res.json(atendimento);
        } else {
          res.status(404).json({
            message: "atendimento não encontrado"
          })
        }
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
};

module.exports = AtendimentoController;

// modelo de exclusão
// indAll({
//   attributes: { exclude: ['senha’] }
// })

//atendimento
// .findAll({
//     include: [
//         {
//             model: Psicologo, 
//             through: {attributes: { exclude: ['senha'] }}         }
//     ]
// })
