const Login = require("../models/Login");

const bcrypt = require("bcrypt");

const AuthController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const login = await Login.findOne({
            where: {
                email,
            },
        });

        if (!login || !bcrypt.compareSync(senha, login.senha)) {
            return res.status(401).json("login inválido");
        }

        return res.json(login);
    },
    async store (req, res) {
        const { email, senha } = req.body;
        const hashSenha = bcrypt.hashSync(senha, 10);  // salt será gerado com o número especificado de rodadas e usado "10"

        const novoLogin = await Login.create({
            email,
            senha: hashSenha,
        });

        res.status(201).json(novoLogin);
    },   
};

module.exports = AuthController;

// 2xx: sucesso
// 200: ok
// 201: created
// 204: sem conteudo
// 3xx: redirecionamento
// 4xx: cliente error
// 400: bad request
// 401: unauthorizef
// 404: not found
// 5xx: server error
// 500: internal server error