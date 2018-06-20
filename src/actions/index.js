import * as constants from "../constants/index"
import UserServiceClient from "../services/user.service.client"

// Example of actions
// export const headingTextChanged = (dispatch, widgetId, newText) => (
//   dispatch({
//     type: constants.HEADING_TEXT_CHANGED,
//     id: widgetId,
//     text: newText})
// )

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

