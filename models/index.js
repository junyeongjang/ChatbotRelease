const path = require("path");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "production";
const config = require(path.join(__dirname, "..", "config", "config.js"))[
  env
];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.ChatbotData = require('./chatbotData')(sequelize, Sequelize);
db.errorKeyword = require('./errorKeyword')(sequelize, Sequelize);
db.subKeyword = require('./subKeyword')(sequelize, Sequelize);
db.flag = require('./flag')(sequelize, Sequelize);

//1:N 관계 유저와 챗봇 (한 챗봇에 여러 명이 사용하려면, N:M으로 바꿔야함 )
db.User.hasMany(db.ChatbotData, {foreignKey: 'user_id', sourceKey:'id'});
db.ChatbotData.belongsTo(db.User,{foreignKey: 'user_id', sourceKey:'id'});

db.errorKeyword.hasMany(db.subKeyword, {foreignKey: 'keywordID', sourceKey:'id'});
db.subKeyword.belongsTo(db.errorKeyword,{foreignKey: 'keywordID', sourceKey:'id'});


module.exports = db;
