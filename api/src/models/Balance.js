const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('balance', {
        amount: {
            type: DataTypes.FLOAT
        }
    })
}