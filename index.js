require('dotenv').config();
const axios = require('axios');
const { getLyrics, getSong } = require('genius-lyrics-api');

const { GENIUS_ACCESS_TOKEN } = process.env;

// const options = {
// 	apiKey: GENIUS_ACCESS_TOKEN,
// 	title: 'Blinding Lights',
// 	artist: 'Waxahatchee',
// 	optimizeQuery: true
// };

const retrieveWaxahatcheeData = async () => {
    const response = await axios.get('https://api.genius.com/artists/68428/songs', {
        params: {
            per_page: 50,
            page: 2
        },
        headers: {
            Authorization: `Bearer ${GENIUS_ACCESS_TOKEN}`
        }
    })

    const bracketsRegEx = /\[.*?\]/g

    console.log(response.data)

    // const lyrics = await getLyrics(songs[10].url);

    // console.log(lyrics.replace(bracketsRegEx, '').split('\n').filter(i => i !== ''));
}

retrieveWaxahatcheeData();