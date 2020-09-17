exports.findKeyword = (keywordArray, msg) => {   //키워드 찾는 함수
    for(let i=0;i<keywordArray.length;i++){
        if(keywordArray[i].keyword===msg) {
            console.log("키워드 찾음", keywordArray[i].keyword);
            return keywordArray[i].contents;
        }
    }
    return 0;
};