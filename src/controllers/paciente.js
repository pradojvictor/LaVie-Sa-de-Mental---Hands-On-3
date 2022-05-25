const { Op } = require("sequelize");

const { Paciente } = require("../models");

const PacienteController = {
  async index(req, res) {
    try {
      const index = await Paciente.findAll();

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
      const { nome, email, data_nascimento } = req.body;

      const newStore = await Paciente.create({
        nome,
        email,
        data_nascimento,
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
        const paciente = await Paciente.findByPk(id);

        if(paciente){
          res.json(paciente);
        } else {
          res.status(404).json({
            message: "Paciente não encontrado"
          })
        }
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, data_nascimento } = req.body;

      const paciente = await Paciente.findByPk(id);

      if(!paciente){
        res.status(404).json({
          message: "Paciente não encontrado"
        });
      }

      await Paciente.update({ nome, email, data_nascimento  },{where: {id: id}});
      const pacienteUpdate = await Paciente.findByPk(id);

      res.json(pacienteUpdate);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  async destroy(req, res) {
    const { id } = req.params;

    const paciente = await Paciente.findByPk(id);

    if (!paciente) {
      res.status(404).json({
        message: "Paciente não encontrado"
      });
    }

    await paciente.destroy();

    res.json("paciente deletado");
  },
};

module.exports = PacienteController;
