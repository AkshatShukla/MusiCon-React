import React from  'react'
import {connect} from 'react-redux'
import Login from "../components/Login";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    usernameChanged: (newText) => actions.usernameChanged(dispatch, newText),
    passwordChanged: (newText) => actions.passwordChanged(dispatch, newText),
    login: (username, password) => actions.login(dispatch, username, password)
    // headingTextChanged: (widgetId, newText) =>
    //     actions.headingTextChanged(dispatch, widgetId, newText)
})
const stateToPropsMapper = state => ({
})
const LoginContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Login)
export default LoginContainer;