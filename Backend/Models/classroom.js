const Sequelize = require('sequelize');

const classroom = sequelize.define(
    'classroom',
    {
        class_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        building: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        room_number: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },
        capacity: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },

    }
);

//Export
module.exports = classroom;