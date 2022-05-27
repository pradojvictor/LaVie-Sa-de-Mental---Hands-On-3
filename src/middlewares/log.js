module.exports = (req, res, next) => {    // uma middle recebe next, assim ele executa é passa para a proxima 
    console.log(`o ip: ${req.ip} acessou a rota: ${req.originalUrl}`);

    next();
};

