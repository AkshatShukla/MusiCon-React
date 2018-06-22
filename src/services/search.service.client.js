import * as actions from "../actions";

let _singleton = Symbol();
const TOKEN_CHECK_API_URL = 'http://localhost:4000/api/get-token';//later change this to heroku url
const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search';

class SearchServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new SearchServiceClient(_singleton);
        return this[_singleton]
    }

    searchEvents(query){
        return fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword='+
            query+'&apikey=RAcRAAAio2LeFih8v4pqWXlZo1CA4mVs')

    }
    searchEventsForUser(city){

        return fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city='+
            city+'&apikey=RAcRAAAio2LeFih8v4pqWXlZo1CA4mVs')
    }
    searchQuery(query, type) {
        let accessToken;
        return this.checkToken()
            .then((token) => {
                accessToken = token;
                // console.log(accessToken);
                return fetch(SPOTIFY_SEARCH_URL + '?q=' + query + '&type=' + type + '&limit=10', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + accessToken
                    }
                })
                    .then(result => result.json())
            });
    }

    checkToken() {
        return fetch(TOKEN_CHECK_API_URL)
            .then((promise) =>
                promise.json()
                    .then((token) => {
                        return token;
                    }))
    }


}

export default SearchServiceClient;