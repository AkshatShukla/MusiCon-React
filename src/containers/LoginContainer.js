import React from  'react'
import {connect} from 'react-redux'
import Login from "../components/Login";
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    // headingTextChanged: (widgetId, newText) =>
    //     actions.headingTextChanged(dispatch, widgetId, newText)
})
const stateToPropsMapper = state => ({
    // preview: state.preview
})
const LoginContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Login)
export default LoginContainer;