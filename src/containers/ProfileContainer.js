import React from  'react'
import {connect} from 'react-redux'
import Profile from '../components/Profile'
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    // headingTextChanged: (widgetId, newText) =>
    //     actions.headingTextChanged(dispatch, widgetId, newText)
})
const stateToPropsMapper = state => ({
    // preview: state.preview
})
const ProfileContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Profile)
export default ProfileContainer;