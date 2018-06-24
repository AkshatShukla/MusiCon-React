import * as constants from '../constants'
let _singleton = Symbol();

class AudiophileServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new AudiophileServiceClient(_singleton);
        return this[_singleton]
    }

    recommend(item,type){
        if(type==='album') {
            return fetch(constants.BASE_URL + 'audiophile/album', {
                method: 'post',
                credentials: "include",
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        else {
            return fetch(constants.BASE_URL + 'audiophile/track', {
                method: 'post',
                credentials: "include",
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
}

export default AudiophileServiceClient;