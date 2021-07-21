const fetch = require('node-fetch');

exports.handler = async function() {
    const API_KEY = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const response = await fetch(API_KEY);
    const data = await(response.json());
    return {
        statusCode: 200,
        body: JSON.stringify(data) 
    }
}