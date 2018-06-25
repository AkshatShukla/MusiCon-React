import React from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const ArtistResultItem = ({
                              result, selectedItem, toggleDetails, modalToggle, playlistModalToggle, details, like, type,
                              eventsForConcertManager, addArtistToEvent, toggleEvent, eventModalToggle
                          }) => {

    function renderEventsOfUser() {
        return eventsForConcertManager.map((event) => (
            <li key="index" className="list-group-item">
                {event.name}
                <button type='btn' className="btn btn-primary float-right"
                        onClick={() => addArtistToEvent(result, event)}>Add
                </button>
            </li>
        ))
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={result.images.length !== 0 ? result.images[0].url : ''} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>Genres:</p>
                {result.genres.length !== 0
                    ? <ul className="list-group">
                        {result.genres.map(genre => (
                            <li key={result.id}>{genre}</li>
                        ))}
                    </ul>
                    : <span>Not Available</span>}
                <br/>
                <form action={result['external_urls'].spotify}>
                    <button type='btn' className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Spotify</button>
                </form>
                <button type='btn' className="btn btn-outline-dark"
                        onClick={() => {
                            selectedItem(result.name, '', result.type, result.id);
                            //toggleDetails();
                        }}>Get More Details
                </button>
                <br/>
                <Modal isOpen={modalToggle === result.id} toggle={() => toggleDetails('')} backdrop={true}
                       centered={true}>
                    <ModalHeader toggle={() => toggleDetails('')}>{details.name}</ModalHeader>
                    <ModalBody>
                        {details.wiki !== undefined ? details.wiki.summary : 'No Summary Available'}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => toggleDetails('')}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="card-footer">
                <small className="text-muted">Followers: {result.followers.total}</small>
            </div>
            <div className="card-footer ">
                <button type='btn' className="btn btn-dark"
                        hidden={type !== 'Listener'}
                        onClick={() => like(result, 'artist')}>Follow
                </button>
                <button type='btn' className="btn btn-dark"
                        hidden={type !== 'Concert Manager'}
                        onClick={() => toggleEvent(result.id)}>Add to Event
                </button>
            </div>
            <Modal isOpen={eventModalToggle === result.id} toggle={() => toggleEvent('')} backdrop={true}
                   centered={true}>
                <ModalHeader toggle={() => toggleEvent('')}>Your Events</ModalHeader>
                <ModalBody>
                    <ul className="list-group">
                        {renderEventsOfUser()}
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleEvent('')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default ArtistResultItem;