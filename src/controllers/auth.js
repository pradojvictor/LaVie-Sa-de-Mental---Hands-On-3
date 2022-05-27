const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Login } = require("../models");
const secret = require("../configs/secret");

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

        // const { senha: _senha, ...user } = login; // forma facil para retirar um item

        const user = {
            id: login.id,
            email: login.email,
    
        }

        const token = jwt.sign(user, secret.key);

        return res.json({
            token,
            user,
        });
    },
    async store (req, res) {
        const { email, senha } = req.body;
        const hashSenha = bcrypt.hashSync(senha, 10);  // salt será gerado com o número especificado de rodadas e usado "10"

        const novoLogin = await Login.create({
            email,
            senha: hashSenha,
        });

        const user = {
            id: novoLogin.id,
            email: novoLogin.email,
        };

        const token = jwt.sign(user, secret.key);

        return res.status(201).json({
            token,
            user,
        });

        // res.status(201).json(novoLogin);
    },   
};

module.exports = AuthController;

