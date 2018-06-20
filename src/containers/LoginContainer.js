import React from  'react'
import {connect} from 'react-redux'
import Login from "../components/Login";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type,newText),
    login: (username, password) => actions.login(dispatch, username, password)
})
const stateToPropsMapper = state => ({
})
const LoginContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Login)
export default LoginContainer;