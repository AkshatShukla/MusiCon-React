import {connect} from "react-redux";
import * as actions from "../actions";
import EventsNearUser from '../components/EventsNearUser'

const dispatchToPropsMapper = dispatch => ({
    searchEventsForUser: () => actions.searchEventsForUser(dispatch)
});

const stateToPropsMapper = state => ({
    city:state.city,
    events:state.eventsNearUser
});

const EventsNearUserContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(EventsNearUser);
export default EventsNearUserContainer;