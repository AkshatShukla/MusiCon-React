import * as constants from "../constants/index"
import UserServiceClient from "../services/user.service.client"

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

export const searchQuery = (dispatch, query, queryType) => (
    dispatch({
        type: constants.SEARCH,
        query: query,
        searchType: queryType
    })
);

export const refreshToken = (dispatch, newToken) => (
    dispatch({
        type: constants.REFRESH_TOKEN,
        token: newToken
    })
);
export const textChanged = (dispatch, type, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        feildType: type,
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

