const Sequelize = require('sequelize');
const sequelize = require('../config');

const Course = require('./Course');
const classroom = require('./classroom')
const time_slot = require('./time_slot')

const Section = sequelize.define(
    'Section',
    {
        course_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: Course,
                key: "id"
            },
        },
        sec_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        semester: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
            primaryKey: true,
        },
        year: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
            primaryKey: true,
        },
        building: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
            references : {
                model : classroom,
                key : 'building'
            }
        },
        room_number: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
            references : {
                model : classroom,
                key : 'room_number'
            }
        },
        time_slot_id: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
            references : {
                model : student,
                key : 'time_slot_id'
            }
        },
    }
);

//Export
module.exports = Section;