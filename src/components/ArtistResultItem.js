import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ArtistResultItem = ({result, selectedItem, toggleDetails, modalToggle, playlistModalToggle, details, like, type,
                              eventsForConcertManager, addArtistToEvent}) => {

    function renderEventsOfUser() {
        return eventsForConcertManager.map((event) => (
            <li key="index" className="list-group-item">
                {event.name}
                <button className="btn btn-primary float-right"
                        onClick={() => addArtistToEvent(result, event)}>Add</button>
            </li>
        ))
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={result.images.length !== 0 ? result.images[0].url : ''} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>Genres:</p>
                <ul className="list-group">
                    {result.genres.map(genre => (
                        <li key={result.id}>{genre}</li>
                    ))}
                </ul>
                <br/>
                <form action={result['external_urls'].spotify}>
                    <button className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Spotify</button>
                </form>
                <button className="btn btn-outline-dark"
                        onClick={() => {
                            selectedItem(result.name, '', result.type);
                            //toggleDetails();
                        }}>Get More Details
                </button>
                <br/>
                <Modal isOpen={modalToggle} toggle={toggleDetails('details')} backdrop={false} centered={true}>
                    <ModalHeader toggle={toggleDetails('details')}>{details.name}</ModalHeader>
                    <ModalBody>
                        {details.wiki !== undefined ? details.wiki.summary : 'No Summary Available'}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => toggleDetails('details')}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="card-footer">
                <small className="text-muted">Followers: {result.followers.total}</small>
            </div>
            <div className="card-footer ">
                <button className="btn btn-dark"
                        hidden={type !== 'Listener'}
                        onClick={() => like(result,'artist')}>Follow</button>
                <button className="btn btn-dark"
                        hidden={type !== 'Concert Manager'}
                        onClick={() => console.log('wait')}>Add to Event</button>
            </div>
            <Modal isOpen={playlistModalToggle} toggle={() => toggleDetails('playlist')} backdrop={false} centered={true}>
                <ModalHeader toggle={() => toggleDetails('playlist')}>Your Events</ModalHeader>
                <ModalBody>
                    <ul className="list-group">
                        {renderEventsOfUser()}
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleDetails('playlist')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default ArtistResultItem;