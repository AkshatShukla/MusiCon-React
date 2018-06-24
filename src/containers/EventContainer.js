import {connect} from 'react-redux'
import EventOfManager from "../components/EventOfManager";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllEventOFUser: () => actions.findAllEventOfUser(dispatch),
    deleteEvent: (event) => actions.deleteEventForConcertManager(dispatch, event),
    getArtistsInEvent: (event) => actions.getArtistsInEvent(dispatch, event)
});

const stateToPropsMapper = state => ({
    events: state.eventsForConcertManager,
    artists: state.artistsInEvent
});

const EventContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(EventOfManager)
export default EventContainer;