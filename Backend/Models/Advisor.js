const Sequelize = require('sequelize');

const Advisor = sequelize.define(
    'Advisor',
    {
    s_id:{
        type:Sequelize.DataTypes.INTEGER(100),
        primaryKey: true,
        allowedNull:false
    },
    i_id:{
        type:Sequelize.DataTypes.INTEGER(100),
        allowedNull:false
    }
}
);

//Export
module.exports = Advisor;