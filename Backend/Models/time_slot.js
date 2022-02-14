const Sequelize = require('sequelize');

const students = sequelize.define(
    'student',
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
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        end_time: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },

    }
);

//Export
module.exports = students;