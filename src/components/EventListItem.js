import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const EventListItem = ({event, deleteEvent, getArtistsInEvent, artistsInEvent, eventModalToggle, toggleEvent,
                           deleteArtistFromEvent,editEvent,id,updateEvent,textChanged}) => {

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
                { id!==event._id &&<h5 className="card-title w-100">{event.name}</h5>}
                { id!==event._id &&<h6>{event.location}</h6>}

                { id===event._id &&<input placeholder={event.name}
                                          onChange={(e) => textChanged(e.target.value,'title')}
                                          className="card-title"/>}
                { id===event._id &&<input placeholder={event.location}
                                          onChange={(e) => textChanged(e.target.value,'loc')}/>}
            </div>
            { id!==event._id &&<div className="card-footer">
                    <small className="text-muted">Date: {event.date.substr(0, 10)}</small>
            </div>}
            { id===event._id && <input type='date' onChange={(e) => textChanged(e.target.value,'date')} />}
            { id!==event._id &&<button className='btn' onClick={() => getArtistsInEvent(event, event._id)}>
                Artists In Event</button>}
            { id!==event._id &&<button className='btn' onClick={() => editEvent(event._id)}>Edit</button>}
            { id===event._id &&<button className='btn' onClick={() => updateEvent(event._id)}>Update</button>}
            { id!==event._id &&<button className='btn' onClick={() => deleteEvent(event)}>Delete</button>}
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