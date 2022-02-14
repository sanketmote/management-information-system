const Sequelize = require('sequelize');

const students = sequelize.define(
    'student',
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
        },
        tot_cred: {
            type: Sequelize.DataTypes.INTEGER(11),
            allowNull: false,
        },

    }
);

//Export
module.exports = students;