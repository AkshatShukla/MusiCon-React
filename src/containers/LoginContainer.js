import React from  'react'
import {connect} from 'react-redux'
import Login from "../components/Login";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // headingTextChanged: (widgetId, newText) =>
    //     actions.headingTextChanged(dispatch, widgetId, newText)
});
const stateToPropsMapper = state => ({
    // preview: state.preview
});
const LoginContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Login);
export default LoginContainer;