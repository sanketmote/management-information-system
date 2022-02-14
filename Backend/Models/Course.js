const Sequelize = require('sequelize');

const Course = sequelize.define(
    'Course',
    {
        course_id:{
        type:Sequelize.DataTypes.INTEGER(100),
        primaryKey: true,
        allowedNull:false
        },
        title :{
            type:Sequelize.DataTypes.STRING(100),
            allowedNull:false
        },
        dept_name :{
            type:Sequelize.DataTypes.STRING(100),
            allowedNull:false
        },
        budget:{
            type:Sequelize.DataTypes.INTEGER(50),
            allowedNull:false
        }
   }
);

//Export
module.exports = Course;