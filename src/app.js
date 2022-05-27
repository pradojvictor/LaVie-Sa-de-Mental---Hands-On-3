const port = 3000;

const express = require("express"); // Importa o express
const routes = require("./router"); // Importa o router
const db = require("./database"); // Importa o banco de dados
const log = require("./middlewares/log");
const handleError = require("./middlewares/handleError");
const jwtMiddleware = require("./middlewares/jwt");
const authMiddleware = require("./middlewares/auth");

db.hasConnection(); // Conecta com o banco de dados

const app = express(); // Chama o express p/ criar um servidor e disponibiliza para config. e uso

app.use(express.json()); // Faz o parse de Json das requisições e repostas
app.use(express.urlencoded({ extended: true }));


app.use(jwtMiddleware.unless({ path: ["/", "/auth/login", "/psicologos/criar"] }));

app.use(authMiddleware);


app.use(log);         // sempre deixa antes das rotas, ira mostra a rota


app.use(routes);      // Usa as rotas


app.use(handleError); // manipulação de erros



app.use((req, res) => { 
    res.status(404).json({ message: "not found"});
});

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`)); // Verifica se servidor está rodando
