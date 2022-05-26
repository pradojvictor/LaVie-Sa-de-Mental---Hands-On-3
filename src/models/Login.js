const { DataTypes } = require("sequelize");

const db = require("../database");

const Login = db.define(
    "login",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { tableName: "login", timestamps: false, underscored: true }
);

module.exports = Login;

