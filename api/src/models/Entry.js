const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('entry', {
        reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        amount: {
            type: DataTypes.FLOAT,
            defaultValue: 1
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM("extraction", "adition"),
            allowNull: false
        }
    });
};