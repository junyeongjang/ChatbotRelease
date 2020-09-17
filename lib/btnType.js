exports.btnType = async (contents,bot,msg) =>{
   const btn = contents.content;
   await bot.sendMessage(msg.chat.id, btn.title);
   await bot.sendPhoto(msg.chat.id, btn.thumbnailImageUrl);
   const len = btn.actions.length;
   if(len==1){
          bot.sendMessage(msg.chat.id, btn.text, {
              "reply_markup": {
                  "keyboard": [[btn.actions[0]]]}
          });
      }
      else if(len==2){
          bot.sendMessage(msg.chat.id, btn.text, {
              "reply_markup": {
                  "keyboard": [[btn.actions[0], btn.actions[1]]]}
          });
      }
      else if(len==3){
          bot.sendMessage(msg.chat.id, btn.text, {
              "reply_markup": {
                  "keyboard": [[btn.actions[0], btn.actions[1]], [btn.actions[2]]]}
          });
      }

    else if(len==4){
      bot.sendMessage(msg.chat.id, btn.text, {
           "reply_markup": {
                  "keyboard": [[btn.actions[0], btn.actions[1]] , [btn.actions[2], btn.actions[3]]]}
          });
   }
}