let util = require('../util/util')
let api = require('../api/api')
module.exports = {
    getTranslate(text) {
        let textReturn = '';
        let words = text.trim().split(' ');
        for (var i = 0; i < words.length; i++) {
            if (i > 0) {
                textReturn += util.HEXA_SPACE
            }
            let listWords = util.getWordsList(words[i]);
            if (listWords && listWords.length > 0) {
                for (var i = 0; i < listWords.length; i++) {
                    var hexaFormat = ' 0x';
                    if (i == 0) {
                        hexaFormat = '0x';
                    }
                    textReturn += hexaFormat + util.charHex(listWords[i]).toString(16).toUpperCase();
                }
            }
        }
        textReturn.trim();
        return textReturn;
    },

    async getCharactersUID(_text) {
        let response = await (api.searchCharacter(_text))
        return response.data.characters[0].uid;  
    },

    async getCharacters(_UID) {
        let response = await (api.getCharacter(_UID))
        return response.data.character.name;  
    },
}