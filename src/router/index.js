const express = require("express");
const routes = express.Router();

// const HomeController = require("../controllers/home");
const PsicologoController = require("../controllers/psicologo");
const PacienteController = require("../controllers/paciente");
const AtendimentoController = require("../controllers/atendimento");
const AuthController = require("../controllers/auth");

const authRegistrarValidador = require("../validations/auth/registrar");
const authLoginValidador = require("../validations/auth/login");

const pacienteCriarValidador = require("../validations/paciente/create");
const pacienteDeleteValidador = require("../validations/paciente/delete");
const pacienteshowValidador = require("../validations/paciente/show");
const pacienteAtualizarValidador = require("../validations/paciente/delete");

const psicologoCriarValidador = require("../validations/psicologo/create")
const psicologoDeleteValidador = require("../validations/psicologo/delete")
const psicologoShowValidador = require("../validations/psicologo/show")
const psicologoAtualizarValidador = require("../validations/psicologo/update")


const { Router } = require("express");

routes.post("/auth/registrar", authRegistrarValidador, AuthController.store);
routes.post("/auth/login", authLoginValidador, AuthController.login);

routes.get("/psicologos/lista", PsicologoController.index);
routes.get("/psicologos/:id", psicologoShowValidador, PsicologoController.show);
routes.post("/psicologos/criar",psicologoCriarValidador, PsicologoController.store);
routes.put("/psicologos/:id/atualizar", psicologoAtualizarValidador, PsicologoController.update);
routes.delete("/psicologos/:id/deletar", psicologoDeleteValidador, PsicologoController.destroy);

routes.get("/pacientes/lista", PacienteController.index);
routes.get("/pacientes/:id", pacienteshowValidador, PacienteController.show);
routes.post("/pacientes/criar", pacienteCriarValidador, PacienteController.store);
routes.put("/pacientes/:id/atualizar", pacienteAtualizarValidador, PacienteController.update);
routes.delete("/pacientes/:id/deletar", pacienteDeleteValidador, PacienteController.destroy);

routes.get("/atendimentos/lista", AtendimentoController.index);
routes.get("/atendimentos/:id", AtendimentoController.show);
routes.post("/atendimentos/criar", AtendimentoController.store);

module.exports = routes;
