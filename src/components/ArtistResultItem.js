import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ArtistResultItem = ({result, selectedItem, toggleDetails, modalToggle, details, like}) => {
    function showDetails() {
        console.log(details.name);
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
                <Modal isOpen={modalToggle} toggle={toggleDetails} backdrop={false} centered={true}>
                    <ModalHeader toggle={toggleDetails}>{details.name}</ModalHeader>
                    <ModalBody>
                        {details.wiki !== undefined ? details.wiki.summary : 'No Summary Available'}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => showDetails()}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggleDetails}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="card-footer">
                <small className="text-muted">Followers: {result.followers.total}</small>
            </div>
            <div className="card-footer ">
                <button onClick={() =>like(result,'artist')}>Like</button>
            </div>
        </div>
    )
};

export default ArtistResultItem;