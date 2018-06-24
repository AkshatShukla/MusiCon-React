import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const EventListItem = ({event, deleteEvent, getArtistsInEvent, artistsInEvent, eventModalToggle, toggleEvent,
                           deleteArtistFromEvent}) => {

    function renderArtistsInEvent() {
        return artistsInEvent.map((artist) => (
            <li key={artist._id} className="list-group-item">
                <h4>{artist.name}</h4>
                <button className="btn btn-outline-danger float-right"
                        onClick={() => deleteArtistFromEvent(artist, event)}>
                    <span><i className="fa fa-trash">&nbsp;</i></span>
                    Remove
                </button>
            </li>
        ))
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded " >
            <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <h6>at {event.location}</h6>
                <button className='btn btn-outline-dark'
                        onClick={() => getArtistsInEvent(event, event._id)}
                style={{marginBottom: '10px'}}>Artists In Event</button>
                <br/>
                <button className='btn btn-outline-danger' onClick={() => deleteEvent(event)}>Delete</button>
            </div>
            <div className="card-footer">
                <small className="text-muted">Date: {event.date.substr(0, 10)}</small>
            </div>
            <Modal isOpen={eventModalToggle === event._id} toggle={() => toggleEvent('')} backdrop={true}
                   centered={true}>
                <ModalHeader toggle={() => toggleEvent('')}>{event.name} Event</ModalHeader>
                <ModalBody>
                    <ol className="list-group">
                        {renderArtistsInEvent()}
                    </ol>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleEvent('')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};
export default EventListItem;