const axios = require('axios')

module.exports = {
    async searchCharacter(_name) {
        let response = await (axios.post('http://stapi.co/api/v1/rest/character/search?name=' + _name));
        return response;
    },
    async getCharacter(_uid) {
        let response = await (axios.get('http://stapi.co/api/v1/rest/character?uid=' + _uid));
        return response;
    },    
}
