const { findKeyword } = require('./findKeyword');
const { findContents } = require('./findContents');
const { errorContents } = require('./errorContents');

exports.mainLogic = async (bot, msg, ChatbotData, errorKeyword, subKeyword, flag) =>{//키워드를 찾는 mainlogic
    try{
        const botData = await ChatbotData.findAll({
            attributes:['data']
        });
        const data = await JSON.parse(botData[0].data); //data[0]은 첫번 째 유저, 0에 유저 아이디 필요
        const contents = await findKeyword(data, flag, errorKeyword, subKeyword,msg.text);
   
        if(contents)// 키워드에 해당하는 정보가 있을 때 
            findContents(contents,bot,msg);
        else 
            errorContents(errorKeyword, flag, subKeyword, bot,msg);
    }
    catch(err){
       console.error(err);
       bot.sendMessage(msg.chat.id, "알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요");
    }
}