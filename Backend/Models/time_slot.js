const Sequelize = require('sequelize');
const sequelize = require('../config');

const time_slot = sequelize.define(
    'time_slot',
    {
        time_slot_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        day: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        start_time: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        end_time: {
            type: Sequelize.TIME,
            allowNull: false,
        },

    }
);

//Export
module.exports = time_slot;