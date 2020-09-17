const {listType} = require('./listType');
const {btnType} = require('./btnType');

exports.findContents = (contentsArray, bot, msg) => {   //키워드 찾는 함수
    contentsArray.forEach(element => {
        if(element.type==='text') { // 텍스트 타입
            bot.sendMessage(msg.chat.id, element.content);
        }
        else if(element.type==='image'){ //이미지 타입
            bot.sendPhoto(msg.chat.id, element.filepath);   
        }
        else if(element.type==='audio'){ //오디오 타입
            bot.sendAudio(msg.chat.id, element.filepath);
        }
        else if(element.type==='video'){ //비디오 타입
            bot.sendVideo(msg.chat.id, element.filepath);
        }
        else if(element.type==='file'){ //파일
            bot.sendDocument(msg.chat.id, element.filepath);
        }
        else if(element.type==='location'){ // 위치 타입
            bot.sendLocation(msg.chat.id,  element.latitude, element.longtitude);
        }
        else if(element.type==='list'){ //리스트 타입
            listType(element, bot, msg);
        } 
        else if(element.type==='btn_template'){
            btnType(element, bot, msg);
        }
    });
};

