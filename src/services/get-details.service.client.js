import * as constants from '../constants'

let _singleton = Symbol();

class GetDetailsServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new GetDetailsServiceClient(_singleton);
        return this[_singleton]
    }

    getTrackInfo(artist, track) {
        return fetch(constants.LAST_FM_TRACK_INFO_URL.replace('API_KEY', constants.LAST_FM_API_KEY)
            + '&artist=' + artist + '&track=' + track + '&format=json')
    }

    getAlbumInfo(artist, album) {
        return fetch(constants.LAST_FM_ALBUM_INFO_URL.replace('API_KEY', constants.LAST_FM_API_KEY)
            + '&artist=' + artist + '&album=' + album + '&format=json')
    }

    getArtistInfo(artist) {
        return fetch(constants.LAST_FM_ARTIST_INFO_URL.replace('API_KEY', constants.LAST_FM_API_KEY)
            + '&artist=' + artist + '&format=json')
    }
}

export default GetDetailsServiceClient;