const Sequelize = require('sequelize');
const sequelize = require('../config');

const Department = require('./Department');

const Instructor = sequelize.define(
    'Instructor',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(20),
            primaryKey: true,
            autoIncrement: true,
            allowedNull: false
        },
        inst_name: {
            type: Sequelize.DataTypes.STRING(100),
            allowedNull: false
        },
        dept_name: {
            type: Sequelize.DataTypes.STRING(100),
            allowedNull: false,
            references : {
                model: Department,
                key:dept_name,
            }
        },
        salary: {
            type: Sequelize.DataTypes.INTEGER(50),
            allowedNull: false
        }
    }
);

//Export
module.exports = Instructor;