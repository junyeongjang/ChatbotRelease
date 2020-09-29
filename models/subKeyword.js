module.exports = (sequelize, DataTypes) =>(
    sequelize.define('subKeyword',{
        keyword:{
            type: DataTypes.STRING(40),
            allowNull: true ,
            unique: true,
        },
        count:{
            type: DataTypes.INTEGER,
        },
    },  {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
);