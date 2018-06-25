import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const AlbumResultItem = ({result, selectedItem, toggleDetails, modalToggle, details, like,type, recommend}) => {

    function renderListOfTracks() {
        if (details.tracks.length !== 0) {
            return details.tracks.map((track) => (
                <li key={track['@attr'].rank} className="list-group-item">
                    {track.name}
                </li>
            ))
        } else {
            return <p>No tracks available</p>
        }
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={result.images[0].url} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>By {result.artists[0].name}</p>
                <form action={result['external_urls'].spotify}>
                    <button type='btn' className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Spotify</button>
                </form>
                <button type='btn' className="btn btn-outline-dark"
                        onClick={() => {
                            selectedItem(result.artists[0].name, result.name, result.type, result.id);
                            //toggleDetails();
                        }}>Get More Details
                </button>
                <br/>
                <Modal isOpen={modalToggle === result.id} toggle={() => toggleDetails('')} backdrop={true} centered={true}>
                    <ModalHeader toggle={() => toggleDetails('')}>{details.name}</ModalHeader>
                    <ModalBody>
                        <h4>About Album</h4>
                        {details.wiki !== undefined ? details.wiki.summary : 'No Summary Available'}
                        <h4>Tracks:</h4>
                        <ul className="list-group">
                            {renderListOfTracks()}
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => toggleDetails('')}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="card-footer">
                <small className="text-muted">Release Date: {result.release_date}</small>
            </div>
            <div className="card-footer " hidden={type !== 'Listener'}>
                <button type='btn' className="btn btn-outline-secondary" onClick={() =>like(result,'album')}>
                    <span><i className="fa fa-thumbs-up"/>&nbsp;</span>Like
                </button>
            </div>
            <div className="card-footer " hidden={type !== 'Audiophile'}>
                <button type='btn' className="btn btn-outline-secondary" onClick={() =>recommend(result,'album')}>
                    <span><i className="fa fa-thumbs-up"/>&nbsp;</span>Recommend
                </button>
            </div>
        </div>
    )
};

export default AlbumResultItem;