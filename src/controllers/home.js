const routes = require("../router/index");


const homeController = {
    home: (req, res) => {
        res.json({ message: "La Vie API", version: "1.0.0" });
    }
}

module.exports = homeController;
