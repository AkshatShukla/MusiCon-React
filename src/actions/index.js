import UserServiceClient from "../services/user.service.client"
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
    if(password !== verifyPassword)
        alert("Password doesn't match")
    else {
        UserServiceClient.instance
            .register(username, password, userType, eventLocation)
            .then(response => {
                if(response.status === 500){
                    alert('username already exist')
                }
                else{
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
    if(password !== verifyPassword)
        alert("Password doesn't match")
    else {
        UserServiceClient.instance
            .register2(username, password, userType)
            .then(response => {
                if(response.status === 500){
                    alert('username already exist')
                }
                else{
                    dispatch({
                        type: constants.SAVE_USERNAME_AND_USERTYPE,
                        username: username,
                        userType: userType
                    })
                }
            })
    }
}

export const updateUser = (dispatch) =>(
    dispatch({
        type:constants.SAVE
    })
)
export const updateStateWithUserNameAndType = (dispatch,username,type)=> (
    dispatch({
                    type: constants.SAVE_USERNAME_AND_USERTYPE,
                    username: username,
                    userType: type
                })
)
export const getProfile = (dispatch) => (
    UserServiceClient.instance
        .profile()
        .then(response => dispatch({
            type: constants.FETCH_PROFILE,
            data: response
        })))

export const login = (dispatch, username, password) => (
     UserServiceClient.instance
        .login(username, password)
        // .then(response => {
        //     if(response.status === 500){
        //         alert('Wrong username or password')
        //     }
        //     else {
        //         dispatch({
        //             type: constants.SAVE_USERNAME_AND_USERTYPE,
        //             username: username,
        //             userType: response.json().type
        //         })
        //     }
        // })

);

