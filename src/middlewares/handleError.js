const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error?.details);
    }
    return res.status(500).json(error);
};


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