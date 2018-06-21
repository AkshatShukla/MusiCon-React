import * as constants from "../constants/index"
import UserServiceClient from "../services/user.service.client"
import SearchServiceClient from "../services/search.service.client";


// Example of actions
// export const headingTextChanged = (dispatch, widgetId, newText) => (
//   dispatch({
//     type: constants.HEADING_TEXT_CHANGED,
//     id: widgetId,
//     text: newText})
// )

export const queryChanged = (dispatch, newQuery) => (
    dispatch({
        type: constants.QUERY_CHANGED,
        query: newQuery
    })
);

export const searchTypeChanged = (dispatch, newType) => (
    dispatch({
        type: constants.TYPE_CHANGED,
        searchType: newType
    })
);

export const searchQuery = (dispatch, query, queryType) => {
    let searchServiceClient = SearchServiceClient.instance;
    searchServiceClient
        .searchQuery(query.value, queryType.value)
        .then((results) => {
            var rootKey;
            for(var ele in results) {
                rootKey = ele;
            }
            if (rootKey === 'albums') {
                dispatch({
                    type: constants.SEARCH,
                    flag: 'album',
                    results: results.albums.items
                })
            } else if (rootKey === 'tracks') {
                dispatch({
                    type: constants.SEARCH,
                    flag: 'track',
                    results: results.tracks.items
                })
            } else if (rootKey === 'artists') {
                dispatch({
                    type: constants.SEARCH,
                    flag: 'artist',
                    results: results.artists.items
                })
            }
        });
};

export const usernameChanged = (dispatch, newText) => (
    dispatch({
        type: constants.USERNAME_TEXT_CHANGED,
        text: newText
    })
);

export const passwordChanged = (dispatch, newText) => (
    dispatch({
        type: constants.PASSWORD_TEXT_CHANGED,
        text: newText
    })
);

export const login = (dispatch, username, password) => (

    UserServiceClient.instance
        .login(username, password)
        .then(response => {
            if(response.status === 500){
                alert('Wrong username or password')
            }
            else {
                dispatch({
                    type: constants.SAVE_USERNAME_AND_USERTYPE,
                    username: username,
                    userType: response.json().type
                })
            }
        })
);

