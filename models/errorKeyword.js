module.exports = (sequelize, DataTypes) =>(
    sequelize.define('errorKeyword',{
        keyword:{
            type: DataTypes.STRING(40),
            allowNull: true ,
            unique: true,
        },
    },  {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
);