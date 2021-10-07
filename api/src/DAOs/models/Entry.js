const { DataTypes } = require('sequelize');
const db = require('../../db');

const Entry = db.define('entry', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    reason: {
        type: DataTypes.STRING,
        defaultValue: "Unspecified"
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    type: {
        type: DataTypes.ENUM('adition', 'extraction'),
        allowNull: false
    }},
    {
        freezeTableName: true
});

module.exports = Entry;