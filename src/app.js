const port = 3000;

const express = require("express"); // Importa o express
const routes = require("./router"); // Importa o router
const db = require("./database"); // Importa o banco de dados

db.hasConnection(); // Conecta com o banco de dados

const app = express(); // Chama o express p/ criar um servidor e disponibiliza para config. e uso

app.use(express.json()); // Faz o parse de Json das requisições e repsostas
app.use(express.urlencoded({ extended: true }));
app.use(routes); // Usa as rotas
app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`)); // Verifica se servidor está rodando
