const Sequelize = require('sequelize');

const classroom = sequelize.define(
    'classroom',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        course_id: {
            type: Sequelize.DataTypes.STRING(15),
            allowNull: false,
        },
        sec_id: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },
        semester: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },
        year: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },
    }
);

//Export
module.exports = classroom;