require('dotenv').config();
const axios = require('axios');
const { getLyrics, getSong } = require('genius-lyrics-api');
const get = require('lodash/get');

const { GENIUS_ACCESS_TOKEN } = process.env;

const retrieveWaxahatcheeData = async () => {
    let page = 1;
    let songs = [];
    let latestResult;

    do {
        const response = await axios.get('https://api.genius.com/artists/68428/songs', {
            params: {
                per_page: 50,
                page
            },
            headers: {
                Authorization: `Bearer ${GENIUS_ACCESS_TOKEN}`
            }
        })

        latestResult = get(response, 'data.response');

        const batchOfSongs = get(response, 'data.response.songs');

        batchOfSongs.forEach(song => songs.push(song));

        page++
    } while (latestResult.next_page !== null)

    const bracketsRegEx = /\[.*?\]/g

    console.log(songs.length)

    // const lyrics = await getLyrics(songs[10].url);

    // console.log(lyrics.replace(bracketsRegEx, '').split('\n').filter(i => i !== ''));
}

retrieveWaxahatcheeData();