import * as constants from '../constants'

let _singleton = Symbol();

class AlbumServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new AlbumServiceClient(_singleton);
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
    saveLike(item){
        return fetch(constants.BASE_URL+'likeAlbum',{
            method: 'post',
            credentials: "include",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default AlbumServiceClient;