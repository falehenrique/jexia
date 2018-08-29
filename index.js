let util = require('./util')
let service = require('./service')

let param = process.argv.splice(2).join(" ");
util.isValidText(param, function (error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(service.getTranslate(param))
    }
})



// const axios = require('axios')
// const querystring = require('querystring')

// module.exports = {
//   searchCharactersByName(name) {
//     return axios.post('http://stapi.co/api/v1/rest/character/search', querystring.stringify({ name })).then(res => {
//       return Promise.resolve(res.data.characters)
//     })
//   },
//   getCharacterDetails(uid) {
//     return axios.get('http://stapi.co/api/v1/rest/character?uid=' + uid).then(res => {
//       return Promise.resolve(res.data.character)
//     })
//   }
// }
