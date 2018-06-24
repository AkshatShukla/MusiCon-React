import {connect} from 'react-redux'
import EventOfManager from "../components/EventOfManager";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    findAllEventOFUser: () => actions.findAllEventOfUser(dispatch),
    deleteEvent: (event) => actions.deleteEventForConcertManager(dispatch, event),
    getArtistsInEvent: (event, id) => actions.getArtistsInEvent(dispatch, event, id),
    toggleEvent: (id) => actions.toggleEvent(dispatch, id),
    deleteArtistFromEvent: (artist, event) => actions.deleteArtistFromEvent(dispatch, artist, event)
});

const stateToPropsMapper = state => ({
    events: state.eventsForConcertManager,
    artistsInEvent: state.artistsInEvent,
    eventModalToggle: state.eventModalToggle
});

const EventContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(EventOfManager);
export default EventContainer;