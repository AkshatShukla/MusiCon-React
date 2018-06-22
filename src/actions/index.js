import SearchServiceClient from '../services/search.service.client'
import UserServiceClient from '../services/user.service.client'
import * as constants from "../constants";

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

    if (queryType.value === 'events') {
        let searchServiceClient = SearchServiceClient.instance;
        searchServiceClient.searchEvents(query.value)
            .then(response => {response.json()
                .then(results =>
                    dispatch({
                        type: constants.SEARCH,
                        flag: 'events',
                        results: results
                    })
                )});
    }
    else {
        let searchServiceClient = SearchServiceClient.instance;
        searchServiceClient
            .searchQuery(query.value, queryType.value)
            .then((results) => {
                var rootKey;
                for (var ele in results) {
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
    }
};
export const textChanged = (dispatch, type, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        fieldType: type,
        text: newText
    })
);

export const selectUserType = (dispatch, type) => (
    dispatch({
        type: constants.SAVE_USERTYPE,
        userType: type
    })
);

export const registerManager = (dispatch, username, password, verifyPassword, userType, eventLocation) => {
    if (password !== verifyPassword)
        alert("Password doesn't match");
    else {
        UserServiceClient.instance
            .register(username, password, userType, eventLocation)
            .then(response => {
                if (response.status === 500) {
                    alert('username already exist')
                }
                else {
                    dispatch({
                        type: constants.SAVE_USERNAME_AND_USERTYPE,
                        username: username,
                        userType: userType
                    })
                }
            })
    }
}

export const registerUser = (dispatch, username, password, verifyPassword, userType) => {
    if (password !== verifyPassword)
        alert("Password doesn't match")
    else {
        UserServiceClient.instance
            .register2(username, password, userType)
            .then(response => {
                if (response.status === 500) {
                    alert('username already exist')
                }
                else {
                    dispatch({
                        type: constants.SAVE_USERNAME_AND_USERTYPE,
                        username: username,
                        userType: userType
                    })
                }
            })
    }
};

export const updateUser = (user) => (
    UserServiceClient.instance
        .updateUser(user)
);
export const updateStateWithUserNameAndType = (dispatch, username, type) => (
    dispatch({
        type: constants.SAVE_USERNAME_AND_USERTYPE,
        username: username,
        userType: type
    })
);
export const getProfile = (dispatch) => (
    UserServiceClient.instance
        .profile()
        .then(response => dispatch({
            type: constants.FETCH_PROFILE,
            data: response
        })));

export const login = (dispatch, username, password) => (
    UserServiceClient.instance
        .login(username, password)

);

export const searchEventsForUser = (dispatch,city) => {
    if(city!==undefined){
    SearchServiceClient.instance
        .searchEventsForUser(city)
        .then(response => response.json()
            .then(results => dispatch({
                    type: constants.SEARCH,
                    flag: 'eventsforuser',
                    results: results
                })
            ))}};

export const logout = (dispatch) => (
    UserServiceClient.instance
        .logout()
        .then(response =>
            results => dispatch({
                type: constants.LOGOUT
            })
        )
)
