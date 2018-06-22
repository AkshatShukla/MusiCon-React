import * as actions from "../actions";
import * as constants from '../constants'

let _singleton = Symbol();

class TrackServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TrackServiceClient(_singleton);
        return this[_singleton]
    }

    saveLike(item){
        return fetch(constants.BASE_URL+'likeTrack',{
            method: 'post',
            credentials: "include",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export default TrackServiceClient;