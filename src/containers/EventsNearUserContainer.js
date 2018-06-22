import {connect} from "react-redux";
import * as actions from "../actions";
import EventsNearUser from '../components/EventsNearUser'

const dispathToPropsMapper = dispatch => ({
    searchforEventsNearUser: (city) => actions.searchEventsForUser(dispatch,city)
});

const stateToPropsMapper = state => ({
    city:state.city,
    eventsNearUser:state.eventsNearUser});

const EventsNearUserContainer = connect(stateToPropsMapper, dispathToPropsMapper)(EventsNearUser)
export default EventsNearUserContainer;