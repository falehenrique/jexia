let util = require('./util/util')
let starttrek = require('./controller/starttrek')
let api = require('./api/api')
let param = process.argv.splice(2).join(' ')

var isValid = util.isValidText(param);
if (isValid) {
    main();
} else {
    console.info("Sorry, but it is an invalid text! Please try again :)");
}

async function main() {
    console.log(starttrek.getTranslate(param))
    let uid = await (starttrek.getCharactersUID(param));

    let name = await (starttrek.getCharacters(uid));
    console.log(name);    
}