const express = require("express");
const routes = express.Router();
const { Router } = require("express");

// controllers
const homeController = require("../controllers/home");
const PsicologoController = require("../controllers/psicologo");
const PacienteController = require("../controllers/paciente");
const AtendimentoController = require("../controllers/atendimento");
const AuthController = require("../controllers/auth");


// validações 
const authLoginValidador = require("../validations/auth/login");
const pacienteCriaValidador = require("../validations/paciente/create");
const psicologoCriarValidador = require("../validations/psicologo/create");


// rota home 
routes.get("/", homeController.home);

//rota do login
routes.post("/auth/login", authLoginValidador, AuthController.login);

//rota do psicologo
routes.get("/psicologos/lista",PsicologoController.index);
routes.get("/psicologos/:id", PsicologoController.show);
routes.post("/psicologos/criar", psicologoCriarValidador, PsicologoController.store);
routes.put("/psicologos/:id/atualizar", PsicologoController.update);
routes.delete("/psicologos/:id/deletar", PsicologoController.destroy);

//rota do paciente
routes.get("/pacientes/lista", PacienteController.index);
routes.get("/pacientes/:id",  PacienteController.show);
routes.post("/pacientes/criar", pacienteCriaValidador, PacienteController.store);
routes.put("/pacientes/:id/atualizar", PacienteController.update);
routes.delete("/pacientes/:id/deletar", PacienteController.destroy);

//rota do atendimento
routes.get("/atendimentos/lista", AtendimentoController.index);
routes.get("/atendimentos/:id", AtendimentoController.show);
routes.post("/atendimentos/criar", AtendimentoController.store);

module.exports = routes;
