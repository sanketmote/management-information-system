const Sequelize = require('sequelize');
const sequelize = require('../config');
const students = require('./student');
const Instructor =require('./Instructor');
 
const Advisor = sequelize.define(
    'Advisor',
    {
    s_id:{
        type:Sequelize.DataTypes.INTEGER(100),
        allowedNull:false,
        references : {
            model : 'student',
            key : 'id'
        }
    },
    i_id:{
        type:Sequelize.DataTypes.INTEGER(100),
        allowedNull:false,
        references : {
            model : 'Instructor',
            key : 'id'
        }
    }
}
);

//Export
module.exports = Advisor;