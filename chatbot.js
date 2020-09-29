const sequelize = require('./models').sequelize;
sequelize.sync();
require('dotenv').config(); //dotenv 사용

//DB연결
const ChatbotData = require('./models').ChatbotData;
const User = require('./models').User;
const errorKeyword = require('./models').errorKeyword;
const subKeyword = require('./models').subKeyword;
const flag = require('./models').flag;

const TelegramBot = require('node-telegram-bot-api'); //telegram api
const { mainLogic } = require('./lib/mainLogic');


async function chatbotMain(){
   const platformData = await ChatbotData.findAll({
        attributes:['platformInfo'],
   });

   const Tokendata = await JSON.parse(platformData[0].platformInfo); //챗봇 위치
   const teleToken =  await Tokendata[1].tokenData; //텔레그램은 1번, 토큰 저장되었음
   const bot = await new TelegramBot(teleToken, {polling: true}); 

   bot.on('message',(msg) => {
        mainLogic(bot, msg, ChatbotData, errorKeyword, subKeyword,flag); 
    });

}

try{
    chatbotMain();
}
catch(err){
    console.log(err);
}
