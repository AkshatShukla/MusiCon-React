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

    follow(item){
        return fetch(constants.BASE_URL+'followArtist',{
            method: 'post',
            credentials: "include",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    unfollow(item) {
        return fetch(constants.BASE_URL + 'unfollowArtist',{
            method: 'delete',
            credentials: "include",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getFollowedArtists() {
        return fetch(constants.BASE_URL + 'followedArtists', {
            credentials: 'include'
        })
    }
}

export default ArtistServiceClient;