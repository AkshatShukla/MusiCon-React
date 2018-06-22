import {connect} from 'react-redux'
import OrganizeEvent from '../components/OrganizeEvent'
import * as actions from "../actions";

const dispathToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
    createEvent: (eventName, venueName, eventDate) => actions.createEvent(dispatch, eventName, venueName, eventDate)
});

const stateToPropsMapper = state => ({
});

const OrganizeEventContainer = connect(stateToPropsMapper, dispathToPropsMapper)(OrganizeEvent)
export default OrganizeEventContainer;