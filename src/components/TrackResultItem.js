import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TrackResultItem = ({result, selectedItem, toggleDetails, modalToggle, details}) => {
    function millisToMinutesAndSeconds(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    function showDetails() {
        console.log(details.name);
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: '22rem'}}>
            <img className="card-img-top" src={result.album.images.length !== 0 ? result.album.images[0].url : ''}
                 alt="No Image Available"/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>By {result.artists[0].name}</p>
                <p>Duration: {millisToMinutesAndSeconds(result.duration_ms)}</p>
                <form action={result['external_urls'].spotify}>
                    <button className="btn btn-outline-dark" style={{marginBottom : '10px'}}>Show on Spotify</button>
                </form>
                {/*<a href={result.preview_url !== null ? result.preview_url : ''}>Preview Track</a>*/}
                <button className="btn btn-outline-dark"
                        onClick={() => {
                            selectedItem(result.artists[0].name, result.name, result.type);
                            //toggleDetails();
                        }}>Get More Details
                </button>
                <br/>
                <Modal isOpen={modalToggle} toggle={toggleDetails} backdrop={false} centered={true}>
                    <ModalHeader toggle={toggleDetails}>{details.name}</ModalHeader>
                    <ModalBody>
                        {details.wiki !== undefined ? details.wiki.summary : 'No Summary Available'}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>showDetails()}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggleDetails}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="card-footer">
                <small className="text-muted">Popularity: {result.popularity}
                    <audio controls>
                        <source src={result.preview_url !== null ? result.preview_url : ''}
                                style={{marginRight: '40px'}}/>
                    </audio>
                </small>
            </div>
        </div>
    )
};

export default TrackResultItem;