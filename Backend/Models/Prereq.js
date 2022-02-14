const Sequelize = require('sequelize');
const sequelize = require('../config');

const Department = require('./Department');

const Prereq = sequelize.define(
    'Prereq',
    {
        course_id: {
            type: Sequelize.DataTypes.INTEGER(100),
            references: {
                model: Department,
                key: "dept_id"
            },
            allowedNull: false
        },
        prereq_id: {
            type: Sequelize.DataTypes.INTEGER(100),
            primaryKey: true,
            allowedNull: false, 
            references: {
                model: Department,
                key: "dept_id"
            },
        }
    }
);

//Export
module.exports = Prereq;