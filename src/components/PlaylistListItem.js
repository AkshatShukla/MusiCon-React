import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const PlaylistListItem = ({playlist, playlistModalToggle, tracksInPlaylist, deletePlaylist, getTracksInPlaylist,
                              toggleDetails, deleteTrackFromPlaylist}) => {

    function renderTracksInPlaylist() {
        console.log(tracksInPlaylist);
        return tracksInPlaylist.map((track) => (
            <li key={track._id} className="list-group-item">
                <h4>{track.name}</h4>
                <button className="btn btn-outline-danger float-right"
                        onClick={() => deleteTrackFromPlaylist(track, playlist)}>
                    <span><i className="fa fa-trash">&nbsp;</i></span>
                    Remove
                </button>
            </li>
        ))
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: '16rem'}}>
            <div className="card-body">
                <h5 className="card-title">{playlist.name}</h5>
                <h6>{playlist.description}</h6>
                <button className='btn btn-dark'
                        onClick={() => getTracksInPlaylist(playlist)}
                        style={{marginBottom: '10px'}}>Show Tracks
                </button>
                <button className='btn btn-outline-danger'
                        onClick={() => deletePlaylist(playlist)}>Delete
                </button>
            </div>
            <Modal isOpen={playlistModalToggle} toggle={() => toggleDetails('playlist')} backdrop={true}
                   centered={true}>
                <ModalHeader toggle={() => toggleDetails('playlist')}>{playlist.name} Playlist</ModalHeader>
                <ModalBody>
                    <ol className="list-group">
                        {renderTracksInPlaylist()}
                    </ol>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleDetails('playlist')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};
export default PlaylistListItem;