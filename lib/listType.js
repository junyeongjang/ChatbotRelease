exports.listType = (contents,bot,msg) =>{
    const list = contents.listContent;
    const len = list.keywordLen;   
    const question = "아래 항목을 선택해주세요";
    if(len==1){
        bot.sendMessage(msg.chat.id,question,{
            "reply_markup": {
                "keyboard": [[list.keywordLink[1]]]}
        });
    }
    else if(len==2){
        bot.sendMessage(msg.chat.id, question, {
            "reply_markup": {
                "keyboard": [[list.keywordLink[1], list.keywordLink[2]]]}
        });
    }
    else if(len==3){
        bot.sendMessage(msg.chat.id, question, {
            "reply_markup": {
                "keyboard": [[list.keywordLink[1], list.keywordLink[2]], [list.keywordLink[3]]]}
        });
    }
    else if(len==4){
        bot.sendMessage(msg.chat.id, question, {
            "reply_markup": {
                "keyboard": [[list.keywordLink[1], list.keywordLink[2]], [list.keywordLink[3], list.keywordLink[4]]]}
        });
    }
    else if(len==5){
        bot.sendMessage(msg.chat.id, question, {
            "reply_markup": {
                "keyboard": [[list.keywordLink[1], list.keywordLink[2]], [list.keywordLink[3], list.keywordLink[4]], [list.keywordLink[5]]]}
        });
    }
    else if(len==6){
        bot.sendMessage(msg.chat.id, question, {
            "reply_markup": {
                "keyboard": [[list.keywordLink[1], list.keywordLink[2]], [list.keywordLink[3], list.keywordLink[4]], [list.keywordLink[5],list.keywordLink[6]]]}
        });
    }
};