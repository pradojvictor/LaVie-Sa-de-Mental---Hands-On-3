const { Op } = require("sequelize");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret")

const { Psicologo } = require("../models");

const PsicologoController = {
  async index(req, res) {
    try {
      const index = await Psicologo.findAll({attributes: {exclude: ['senha']}});

      res.json(index);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente" });
    }
  },
  async store(req, res) {
    try {
      const { nome, email, senha, apresentacao } = req.body;

      const hashSenha = bcrypt.hashSync(senha, 10); 

      const { id } = await Psicologo.create({
        nome,
        email,
        senha: hashSenha,
        apresentacao,
      });

      // const Use = {
      //   id,
      //   nome,
      //   email,
      //   apresentacao
      // };

      const token = jwt.sign({
        id,
        nome,
        email,
        apresentacao
      }, secret.key);
      return res.status(201).json({ token, 
        id,
        nome,
        email,
        apresentacao });

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente" });
    }
  },
  async show(req, res) {
    try {
        const { id } = req.params;
        const psicologo = await Psicologo.findByPk(id, {attributes: {exclude: ['senha']}});

        if(psicologo){
          res.json(psicologo);
        } else {
          res.status(404).json({
            message: "Psicologo não encontrado"
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
      const { nome, email, senha, apresentacao } = req.body;

      const psicologo = await Psicologo.findByPk(id);

      if(!psicologo){
        res.status(404).json({
          message: "Psicologo não encontrado"
        });
      }

      await Psicologo.update({ nome, email, senha, apresentacao },{where: {id: id}});
      const psicologoupdate = await Psicologo.findByPk(id);

      res.json(psicologoupdate);

    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },
  async destroy(req, res) {
    const { id } = req.params;

    const psicologo = await Psicologo.findByPk(id);

    if (!psicologo) {
      res.status(404).json({
        message: "Psicologo não encontrado"
      });
    }

    await psicologo.destroy();

    res.json("psicologo deletado");
  },
};

module.exports = PsicologoController;


// async store(req, res) {
//   try {
//     const { nome, email, senha, apresentacao } = req.body;

//     const newStore = await Psicologo.create({
//       nome,
//       email,
//       senha,
//       apresentacao,
//     });

//     res.json(newStore)

//   } catch (error) {
//     console.log(error.message);
//     res
//       .status(500)
//       .json({ error: "Oops, tivemos um erro, tente novamente." });
//   }
// },