const TelegramBot = require("node-telegram-bot-api");

exports.errorContents = async (errorKeyword, flag, subKeyword, bot, msg) =>{
    try{
        await flag.update({ flag:0, keyword: msg.text},{where:{id:1}});    
        const errorData = await errorKeyword.findOne({
                where: {
                    keyword: msg.text
                }
            });
            if(errorData){
                console.log(errorData.keyword);
                const subKey = await subKeyword.findAll({where : {keywordID: errorData.id}});
                if(subKey.length>=3){
                    subKey.sort(function (a,b){ return a.count > b.count ? -1 : a.count < b.count ? 1 : 0; }); //정렬
                    bot.sendMessage(msg.chat.id, "키워드를 찾을 수 없습니다");
                    bot.sendMessage(msg.chat.id, "혹시 "+ '"' +subKey[0].keyword+ '",' +" " + '"' +subKey[1].keyword+ '",' +" " + '"' +subKey[2].keyword+'"' + " "+ "중에 찾으시는 키워드가 있나요?");

                }
                else{
                    bot.sendMessage(msg.chat.id, "키워드를 찾을 수 없습니다");
                }
                await flag.update({flag:0, keyword: msg.text},{where:{id:1}});
            
            }
            else{
                await errorKeyword.create({keyword: msg.text});
                await flag.update({flag:0, keyword: msg.text},{where:{id:1}});
                bot.sendMessage(msg.chat.id, "키워드를 찾을 수 없습니다");
            }
    }
    catch(err){
        console.log('에러 콘텐츠 로직 error');
        console.log(error);
        bot.sendMessage(msg.chat.id, "알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요");
    }
};


