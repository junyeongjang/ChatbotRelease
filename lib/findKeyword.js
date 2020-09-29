const subKeyword = require("../models/subKeyword");

exports.findKeyword = async (keywordArray,flag, errorKeyword, subKeyword, msg) => {   //키워드 찾는 함수

    try{
        for(let i=0;i<keywordArray.length;i++){
            if(keywordArray[i].keyword===msg) {
                const f = await flag.findOne({where :{ id: 1}});
                if(!f.flag){
                    const errKeyword = await errorKeyword.findOne({where : { keyword : f.keyword }});
                    const subKey = await subKeyword.findOne({
                        where : {keyword : msg,
                                keywordID: errKeyword.id}});
                    if(!subKey) {
                        await subKeyword.create({
                            keyword : msg,
                            keywordID : errKeyword.id,
                            count: 1,
                        });
                    }
                    else{
                        await subKeyword.update(
                            {count : subKey.count+1},
                            {where: {keywordID: errKeyword.id}},
                        );   
                    }
                }

                console.log("키워드 찾음", keywordArray[i].keyword);
                return keywordArray[i].contents;
            }
        }
    return 0;
    }
    catch(err){
        console.log('findKeyword 로직 error');
        console.log(error);
        bot.sendMessage(msg.chat.id, "알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요");ㄴ
    }
};