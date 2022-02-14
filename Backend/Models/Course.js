const Sequelize = require('sequelize');
const sequelize = require('../config');

const Department = require('./Department');

const Course = sequelize.define(
    'Course',
    {
        course_id: {
            type: Sequelize.DataTypes.INTEGER(100),
            primaryKey: true,
            allowedNull: false
        },
        title: {
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
        credits: {
            type: Sequelize.DataTypes.INTEGER(50),
            allowedNull: false
        }
    }
);

//Export
module.exports = Course;