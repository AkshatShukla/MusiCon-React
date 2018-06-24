import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TrackResultItem = ({result, selectedItem, toggleDetails, modalToggle, playlistModalToggle,
                             details, like, type, playlistsForListener, addTrackToPlaylist, recommend,togglePlaylist}) => {
    function millisToMinutesAndSeconds(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    function renderPlaylistOfUser() {
        return playlistsForListener.map((playlist) => (
            <li key="index" className="list-group-item">
                {playlist.name}
                <button className="btn btn-primary float-right"
                    onClick={() => addTrackToPlaylist(result, playlist)}>Add</button>
            </li>
        ))
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={result.album.images.length !== 0 ? result.album.images[0].url : ''} alt=''/>
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
                <audio controls hidden={result.preview_url === null} style={{width: '140px', marginTop: '15px'}}>
                    <source src={result.preview_url !== null ? result.preview_url : ''}
                            style={{marginRight: '40px'}}/>
                </audio>
                <br/>
                <Modal isOpen={modalToggle} toggle={() => toggleDetails('details')} backdrop={false} centered={true}>
                    <ModalHeader toggle={() => toggleDetails('details')}>{details.name}</ModalHeader>
                    <ModalBody>
                        {details.wiki !== undefined ? details.wiki.summary : 'No Summary Available'}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => toggleDetails('details')}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            <div className="card-footer">
                <small className="text-muted">Popularity: {result.popularity}
                </small>
            </div>
            <div className="card-footer " hidden={type !== 'Listener'}>
                <div className="btn-group" style={{display: 'inline'}}>
                    <button className="btn btn-outline-secondary" onClick={() => like(result,'track')}>
                        <span><i className="fa fa-thumbs-up"/>&nbsp;</span>Like
                    </button>
                    <button className="btn btn-outline-secondary" onClick={() => togglePlaylist(result.id)}>
                        <span><i className="fa fa-plus"/>&nbsp;</span>Add to Playlist
                    </button>
                </div>
            </div>
            <div className="card-footer " hidden={type !== 'Audiophile'}>
                <button className="btn btn-outline-secondary" onClick={() => recommend(result,'track')}>
                    <span><i className="fa fa-thumbs-up"/>&nbsp;</span>Recommend
                </button>
            </div>
            <Modal isOpen={playlistModalToggle === result.id} toggle={() => togglePlaylist('')} backdrop={false} centered={true}>
                <ModalHeader toggle={() => togglePlaylist('')}>Your Playlist</ModalHeader>
                <ModalBody>
                    <ul className="list-group">
                        {renderPlaylistOfUser()}
                    </ul>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => togglePlaylist('')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default TrackResultItem;