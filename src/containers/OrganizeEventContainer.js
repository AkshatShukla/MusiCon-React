import {connect} from 'react-redux'
import OrganizeEvent from '../components/OrganizeEvent'
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
    createEvent: (eventName, venueName, eventDate) => actions.createEvent(dispatch, eventName, venueName, eventDate)
});

const stateToPropsMapper = state => ({
    username: state.username
});

const OrganizeEventContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(OrganizeEvent);
export default OrganizeEventContainer;