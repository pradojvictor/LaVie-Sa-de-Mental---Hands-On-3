const express = require("express");
const routes = express.Router();


const homeController = require("../controllers/home");
const PsicologoController = require("../controllers/psicologo");
const PacienteController = require("../controllers/paciente");
const AtendimentoController = require("../controllers/atendimento");
const AuthController = require("../controllers/auth");

// const authRegistrarValidador = require("../validations/auth/registrar");
const authLoginValidador = require("../validations/auth/login");


// const pacienteValidador = require("../validations/paciente");
const psicologoCriarValidador = require("../validations/psicologo/create")
// const atendimentoValidador = require("../validations/atendimento")



const { Router } = require("express");

routes.get("/", homeController.home);

// routes.post("/auth/registrar", authRegistrarValidador, AuthController.store);
routes.post("/auth/login", authLoginValidador, AuthController.login);

routes.get("/psicologos/lista",PsicologoController.index);
routes.get("/psicologos/:id", PsicologoController.show);
routes.post("/psicologos/criar", psicologoCriarValidador, PsicologoController.store);
routes.put("/psicologos/:id/atualizar", PsicologoController.update);
routes.delete("/psicologos/:id/deletar", PsicologoController.destroy);

routes.get("/pacientes/lista", PacienteController.index);
routes.get("/pacientes/:id",  PacienteController.show);
routes.post("/pacientes/criar", PacienteController.store);
routes.put("/pacientes/:id/atualizar", PacienteController.update);
routes.delete("/pacientes/:id/deletar", PacienteController.destroy);

routes.get("/atendimentos/lista", AtendimentoController.index);
routes.get("/atendimentos/:id", AtendimentoController.show);
routes.post("/atendimentos/criar", AtendimentoController.store);

module.exports = routes;
