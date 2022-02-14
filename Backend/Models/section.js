const Sequelize = require('sequelize');

const section = sequelize.define(
    'section',
    {
        course_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tec_id: {
            type: Sequelize.DataTypes.INTEGER(15),
            allowNull: false,
        },
        semester: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        year: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
        },
        building: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
        },
        room_number: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
        },
        time_slot_id: {
            type: Sequelize.DataTypes.STRING(11),
            allowNull: false,
        },
    }
);

//Export
module.exports = section;