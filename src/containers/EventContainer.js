import {connect} from 'react-redux'
import EventOfManager from "../components/EventOfManager";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllEventOFUser: () => actions.findAllEventOfUser(dispatch),
    deleteEvent: (event) => actions.deleteEventForConcertManager(dispatch, event)
});

const stateToPropsMapper = state => ({
    events: state.eventsForConcertManager
});

const EventContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(EventOfManager)
export default EventContainer;