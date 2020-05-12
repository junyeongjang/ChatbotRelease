require('dotenv').config();
module.exports = {
    development: {
        username: 'root',
        password:'skd03052',
        database: 'ezaidb',
        host: 'ezaidb.cc8imstz6wwh.ap-northeast-2.rds.amazonaws.com',
        dialect: 'mysql',
        port:'3306',
        operatorsAliases: 'false',
    },
      production: {
        username: 'root',
        password: 'skd03052',
        database: 'ezaidb',
        host: 'ezaidb.cc8imstz6wwh.ap-northeast-2.rds.amazonaws.com',
        port:'3306',
        dialect: 'mysql',
        operatorsAliases: 'false',
        logging: false,
      }
}