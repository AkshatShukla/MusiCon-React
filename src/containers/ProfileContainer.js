import React from  'react'
import {connect} from 'react-redux'
import Profile from '../components/Profile'
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    TextChanged: (type,newText) =>
        actions.textChanged(dispatch, type, newText),
    update: () =>
        actions.updateUser(dispatch)

    })
const stateToPropsMapper = state => ({
    // preview: state.preview
})
const ProfileContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Profile)
export default ProfileContainer;