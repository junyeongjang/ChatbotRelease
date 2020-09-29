module.exports = (sequelize, DataTypes) =>(
    sequelize.define('flag',{
        flag:{
            type: DataTypes.INTEGER,
        },
        keyword:{
            type: DataTypes.STRING(40),
        },
    },  {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
);