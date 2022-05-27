const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Psicologo } = require("../models");
const secret = require("../configs/secret");

const AuthController = {
    async login(req, res) {
        const { email, senha, } = req.body;

        const psicologo = await Psicologo.findOne({
            where: {
                email,
            },
        });

        if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json("login inválido");
        }

        // const { senha: _senha, ...user } = login; // forma facil para retirar um item

        const user = {
            id: psicologo.id,
            email: psicologo.email,
            senha: psicologo.senha,
            nome : psicologo.nome,
            apresentacao : psicologo.apresentacao,
        };

        const token = jwt.sign(user, secret.key);

        return res.json({
            token,
            user,
        });
    }

//     async store (req, res) {
//         const { email, senha } = req.body;
//         const hashSenha = bcrypt.hashSync(senha, 10);  // salt será gerado com o número especificado de rodadas e usado "10"

//         const novoLogin = await Login.create({
//             email,
//             senha: hashSenha,
//         });

//         const user = {
//             id: novoLogin.id,
//             email: novoLogin.email,
//         };

//         const token = jwt.sign(user, secret.key);

//         return res.status(201).json({
//             token,
//             user,
//         });

//         // res.status(201).json(novoLogin);
//     },   
// 
};

module.exports = AuthController;

