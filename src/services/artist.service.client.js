import * as actions from "../actions";
import * as constants from '../constants'

let _singleton = Symbol();

class ArtistServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ArtistServiceClient(_singleton);
        return this[_singleton]
    }

    // insertIntoDatabase(results) {
    //     console.log(results);
    //     return fetch(constants.BASE_URL + 'album', {
    //         method: 'POST',
    //         body: JSON.stringify(results),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }
    // saveLike(){
    //     console.log('save like for artist');
    //     return fetch(constants.BASE_URL+'like/artist',{
    //         method: 'post',
    //         credentials: "include",
    //         body: JSON.stringify(result),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // }
}

export default ArtistServiceClient;