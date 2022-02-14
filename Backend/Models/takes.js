const Sequelize = require('sequelize');
const sequelize = require('../config');

const students = require('./students');
const section = require('./Section');

const takes = sequelize.define(
    'takes',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            references:{
                model: students,
                key: 'id'
            }
        },

        course_id: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references:{
                model: section,
                key: 'course_id'
            }
        },
        sec_id: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            references:{
                model: section,
                key: 'sec_idvv'
            }
        },
        semester: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: section,
                key: 'semester'
            }
        },
        year: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            references:{
                model: section,
                key: 'year'
            }
        },
        grade: {
            type: Sequelize.DOUBLE(2,2),
            allowNull: false,
        },
    }
);

//Export
module.exports = takes;