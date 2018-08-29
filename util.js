let alphabet = ['a', 'b', 'ch', 'd', 'e', 'gh', 'h', 'i', 'j', 'l', 'm', 'n', 'ng', 'o', 'p', 'q', 'q', 'r', 's', 't', 'tlh', 'u', 'v', 'w', 'y', '’']
let alphabetRegex = new RegExp(alphabet.slice().reverse().join('|') + '|\\d', 'ig')
let HEXA_SPACE = ' 0x0020';
let HEXA_NUMBER = 0xF8F0;
let HEXA_LETTER = 0xF8D0;
module.exports = {
        HEXA_SPACE,
        HEXA_NUMBER,
        HEXA_LETTER,
    },
module.exports = {
    //exercise 3
    //You might notice that
    //some letters are missing which means they are not translatable for this test
    //purposes, then ignore the whole input;
    isValidText(param, r) {
        let paramText = param.replace(' ', '');
        let paramTextMatch = paramText.match(alphabetRegex);
        var error;
        var result;
        if ((paramTextMatch == null) || (paramTextMatch.length != param.length)) {
            r("Sorry, but we have an error. Try again :)", result);
        }
        r(error, paramTextMatch);
    },

    getWordsList(text) {
        console.info(text.toLowerCase().match(alphabetRegex));
        return text.toLowerCase().match(alphabetRegex);
    },

    charHex(token) {
        //test if is a number
        if (!isNaN(token)) {
            return HEXA_NUMBER + parseInt(token);
        } else {
            let tokenIndex = alphabet.indexOf(token);

            if (tokenIndex > -1) {
                return HEXA_LETTER + tokenIndex;
            }
        }
    },

}