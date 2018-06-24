import * as constants from '../constants'

let _singleton = Symbol();

class AdminServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new AdminServiceClient(_singleton);
        return this[_singleton]
    }

    getUsers(){
        return fetch(constants.BASE_URL+'admin/user',{
            method: 'get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    updateUser(user){
        return fetch(constants.BASE_URL+'admin/user',{
            method: 'post',
            credentials: "include",
            body:JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }})
    }
    deleteUser(id){
        return fetch(constants.BASE_URL+'admin/user/'+id,{
            method: 'delete',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }})
    }

    findAllLikedAlbum() {
        return fetch(constants.BASE_URL + 'admin/all-liked-album')
    }

    deleteLikedAlbum(likeAlbumId) {
        return fetch(constants.BASE_URL + 'admin/likedAlbum/' + likeAlbumId, {
            method: 'delete'
        })
    }

    findAllLikedTrack() {
        return fetch(constants.BASE_URL + 'admin/all-liked-track')
    }

    deleteLikedTrack(likeTrackId) {
        return fetch(constants.BASE_URL + 'admin/likedTrack/' + likeTrackId, {
            method: 'delete'
        })
    }

    findAllRecommendedAlbum() {
        return fetch(constants.BASE_URL + 'admin/all-recommended-album')
    }

    deleteRecommendedAlbum(recommendedAlbumId) {
        return fetch(constants.BASE_URL + 'admin/recommendedAlbum/' + recommendedAlbumId, {
            method: 'delete'
        })
    }

    findAllRecommendedTrack() {
        return fetch(constants.BASE_URL + 'admin/all-recommended-track')
    }

    deleteRecommendedTrack(recommendedTrackId) {
        return fetch(constants.BASE_URL + 'admin/recommendedTrack/' + recommendedTrackId, {
            method: 'delete'
        })
    }
}

export default AdminServiceClient;