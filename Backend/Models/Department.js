const Sequelize = require('sequelize');
const sequelize = require('../config');

const Department = sequelize.define(
    'Department',
    {
        dept_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dept_name: {
            type: Sequelize.DataTypes.STRING(100),
            primaryKey: true,
            allowedNull: false
        },
        building: {
            type: Sequelize.DataTypes.STRING(100),
            allowedNull: false
        },
        budget: {
            type: Sequelize.DataTypes.INTEGER(50),
            allowedNull: false
        }
    }
);

//Export
module.exports = Department;