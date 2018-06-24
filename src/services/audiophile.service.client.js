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

    recommend(item, type) {
        if (type === 'album') {
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

    getAllAudiophile() {
        return fetch(constants.BASE_URL + 'audiophile', {
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    unfollowAudiophile(item) {
        return fetch(constants.BASE_URL + 'audiophile/unfollowAudiophile',{
            method: 'delete',
            credentials: "include",
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    getFollowedAudiophilesForUser() {
        return fetch(constants.BASE_URL + 'audiophile/followedAudiophile', {
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    followAudiophile(id){
        return fetch(constants.BASE_URL + 'audiophile/'+id,{
            method: 'post',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    getAudiophileContent(id,type){
        if(type==='track'){
            return fetch(constants.BASE_URL + 'audiophile/track/' + id, {
                method: 'get',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        else {
            return fetch(constants.BASE_URL + 'audiophile/album/' + id, {
                method: 'get',
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
    }
}

export default AudiophileServiceClient;