import React from  'react'
import {connect} from 'react-redux'
import Profile from '../components/Profile'
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    TextChanged: (type,newText) =>
        actions.textChanged(dispatch, type, newText),
    update: () =>
        actions.updateUser(dispatch),
    getProfile: () =>
        actions.getProfile(dispatch)

    })
const stateToPropsMapper = state => ({
    // preview: state.preview
    username:state.username,
    firstName:state.firstName,
    lastName:state.lastName,
    email:state.email,
    dob:state.dob,
    phone:state.phone,
    address:state.address
})
const ProfileContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Profile)
export default ProfileContainer;