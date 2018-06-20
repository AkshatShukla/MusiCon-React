import React from 'react';
import {connect} from 'react-redux';
import Registration from '../components/Registration';
import * as actions from "../actions";


const dispathToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
    selectUserType: (type) => actions.selectUserType(dispatch, type),
    registerManager: (username, password, verifyPassword, userType, eventLocation) =>
        actions.registerManager(dispatch, username, password, verifyPassword, userType, eventLocation),
    registerUser: (username, password, verifyPassword, userType) =>
        actions.registerUser(dispatch, username, password, verifyPassword, userType)
});

const stateToPropsMapper = state => ({
    userType: state.userType
});

const RegistrationContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Registration)
export default RegistrationContainer;