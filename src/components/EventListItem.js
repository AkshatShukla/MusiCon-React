import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import concertImage from '../images/concert-image.jpg';

const EventListItem = ({
                           event, deleteEvent, getArtistsInEvent, artistsInEvent, eventModalToggle, toggleEvent,
                           deleteArtistFromEvent, editEvent, id, updateEvent, textChanged
                       }) => {

    function renderArtistsInEvent() {
        return artistsInEvent.map((artist) => (
            <li key={artist._id} className="list-group-item">
                <h4>{artist.name}</h4>
                <button type='btn' className="btn btn-outline-danger float-right"
                        onClick={() => deleteArtistFromEvent(artist, event)}>
                    <span><i className="fa fa-trash">&nbsp;</i></span>
                    Remove
                </button>
            </li>
        ))
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded ">
            <div className="card-body">
                <img className="card-img-top" src={concertImage} alt='' style={{marginBottom: '10px'}}/>
                {id !== event._id && <h5 className="card-title w-100">{event.name}</h5>}
                {id !== event._id && <h6>at {event.location}</h6>}

                {id === event._id && <input placeholder={event.name}
                                            onChange={(e) => textChanged(e.target.value, 'title')}
                                            className="card-title"/>}
                {id === event._id && <input placeholder={event.location}
                                            onChange={(e) => textChanged(e.target.value, 'loc')}/>}
                {id === event._id && <input type='date'
                                            style={{marginBottom: '10px'}}
                                            onChange={(e) => textChanged(e.target.value, 'date')}/>}
                {id !== event._id && <button type='btn' className='btn btn-outline-dark'
                                             onClick={() => getArtistsInEvent(event, event._id)}
                                             style={{marginBottom: '10px'}}>Artists In Event</button>}
                 &nbsp;
                {id !== event._id && <button type='btn' className='btn btn-outline-dark'
                                             style={{marginBottom: '10px'}}
                                             onClick={() => editEvent(event._id)}>Edit</button>}
                {id === event._id && <button type='btn' className='btn btn-outline-success'
                                             style={{marginBottom: '10px'}}
                                             onClick={() => updateEvent(event._id)}>Update</button>}
                {id !== event._id && <button type='btn' className='btn btn-outline-danger'
                                             onClick={() => deleteEvent(event)}>Delete</button>}
            </div>
            {id !== event._id && <div className="card-footer">
                <small className="text-muted">Date: {event.date.substr(0, 10)}</small>
            </div>}
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