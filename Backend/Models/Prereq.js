const Sequelize = require('sequelize');

const Prereq = sequelize.define(
    'Prereq',
    {
    course_id:{
        type:Sequelize.DataTypes.INTEGER(100),
        references: {
            model: Course,
            key:   "id"
          },
        allowedNull:false
    },
    prereq_id:{
        type:Sequelize.DataTypes.INTEGER(100),
        primaryKey:true,
        allowedNull:false
    }
}
);

//Export
module.exports = Prereq;