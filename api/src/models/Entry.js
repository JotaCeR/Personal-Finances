const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('entry', {
        reason: {
            type: DataTypes.STRING
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        amount: {
            type: DataTypes.FLOAT
        },
        date: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.BOOLEAN
        }
    });
};