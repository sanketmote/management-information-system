const Sequelize = require('sequelize');
const sequelize = require('../config');

const Department = require('./Department');

const students = sequelize.define(
    'students',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        dept_name: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references : {
                model:Department,
                key:'dept_name'
            }
        },
        tot_cred: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },

    }
);

//Export
module.exports = students;