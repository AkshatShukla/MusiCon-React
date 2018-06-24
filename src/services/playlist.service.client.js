import * as actions from "../actions";
import * as constants from '../constants'

let _singleton = Symbol();

class PlaylistServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new PlaylistServiceClient(_singleton);
        return this[_singleton]
    }

    createPlaylist(playlistName, playlistDescription){
        var playlist = {
            name: playlistName,
            description: playlistDescription
        };
        return fetch(constants.BASE_URL + 'playlist', {
            method: 'post',
            body: JSON.stringify(playlist),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    findAllPlaylistOFUser(){
        return fetch(constants.BASE_URL + 'playlists',{
            credentials: "include"
        })
    }

    deletePlaylist(playlistId){
        return fetch(constants.BASE_URL + 'playlist/' + playlistId,{
            method: 'delete',
            credentials: "include"
        })
    }

    getTracksInPlaylist(playlistId){
        return fetch(constants.BASE_URL + 'playlist/' + playlistId + '/tracks')
    }

    addTrackToPlaylist(playlist, track){
        console.log('here in client')
        return fetch(constants.BASE_URL + 'playlist/' + playlist._id + '/addtrack', {
            method: 'post',
            credentials: "include",
            body: JSON.stringify(track),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default PlaylistServiceClient;