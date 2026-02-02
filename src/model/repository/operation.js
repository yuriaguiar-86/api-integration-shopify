const connection = require("../connection");
const { DataTypes } = require('sequelize');

class Operation {
    constructor() {
        this.model = connection.sequelize.define('operations', {
            id: {
                primaryKey: true,
                autoIncrement: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            store_name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            client: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            secret: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
    }
}

module.exports = new Operation().model;