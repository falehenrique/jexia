let util = require('./util')
module.exports = {   
    getTranslate(text) {
        let textReturn = '';
        const words = text.trim().split(' ');
        console.info(words);    

        for(var i = 0; i < words.length; i++) {
            if(i > 0 ) {
                textReturn += util.HEXA_SPACE
            }
            let listWords = util.getWordsList(words[i]);
            for(var i = 0; i < listWords.length; i++){
                textReturn += ' 0x' + util.charHex(listWords[i]).toString(16).toUpperCase()
            }           
        }
        textReturn.trim()
        return textReturn;
    }
}
