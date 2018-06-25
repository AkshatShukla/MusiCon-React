import {connect} from 'react-redux'
import Profile from '../components/Profile'
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    TextChanged: (type,newText) => actions.textChanged(dispatch, type, newText),
    update: (user) => actions.updateUser(user),
    getProfile: () => actions.getProfile(dispatch)
});

const stateToPropsMapper = state => ({
    username: state.username,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    dob: state.dob,
    phone: state.phone,
    city: state.city,
    description: state.description
});

const ProfileContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Profile);
export default ProfileContainer;