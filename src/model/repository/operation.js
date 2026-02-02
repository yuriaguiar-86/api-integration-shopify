const connection = require("../connection");
const { DataTypes } = require('sequelize');

class Operation {
    constructor() {
        this.model = connection.sequelize.define('operations', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            white_store: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            white_client: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            white_secret: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            black_store: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            black_client: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            black_secret: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            timestamps: true,
        });
    }
}

module.exports = new Operation().model;