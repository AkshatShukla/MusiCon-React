import {connect} from "react-redux";
import * as actions from "../actions";
import EventsNearUser from '../components/EventsNearUser'

const dispatchToPropsMapper = dispatch => ({
    searchforEventsNearUser: (city) => actions.searchEventsForUser(dispatch,city)
});

const stateToPropsMapper = state => ({
    city:state.city,
    eventsNearUser:state.eventsNearUser});

const EventsNearUserContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(EventsNearUser)
export default EventsNearUserContainer;