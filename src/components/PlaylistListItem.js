import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const PlaylistListItem = ({playlist, modalToggle, tracksInPlaylist, deletePlaylist, getTracksInPlaylist,
                              toggleDetails, deleteTrackFromPlaylist,editEvent,id,updateEvent,textChanged}) => {

    function renderTracksInPlaylist() {
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
                { id!==playlist._id &&<h5 className="card-title">{playlist.name}</h5>}
                { id!==playlist._id &&<h6>{playlist.description}</h6>}
                { id===playlist._id && <input placeholder={playlist.name}
                                              onChange={(e) => textChanged(e.target.value,'name')}
                                              className="card-title"/>}
                { id===playlist._id && <input placeholder={playlist.description}
                                              onChange={(e) => textChanged(e.target.value,'description')}
                                              className="card-title"/>}
                { id!==playlist._id &&<button className='btn btn-dark'
                        onClick={() => getTracksInPlaylist(playlist, playlist._id)}
                        style={{marginBottom: '10px'}}>Show Tracks
                </button>}
                { id!==playlist._id && <button className='btn btn-outline-danger'
                        onClick={() => deletePlaylist(playlist)}>Delete
                </button>}
                { id!==playlist._id &&<button className='btn' onClick={() => editEvent(playlist._id)}>Edit</button>}
                { id===playlist._id &&<button className='btn' onClick={() => updateEvent(playlist._id)}>Update</button>}
            </div>
            <Modal isOpen={modalToggle === playlist._id} toggle={() => toggleDetails('')} backdrop={true}
                   centered={true}>
                <ModalHeader toggle={() => toggleDetails('')}>{playlist.name} Playlist</ModalHeader>
                <ModalBody>
                    <ol className="list-group">
                        {renderTracksInPlaylist()}
                    </ol>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggleDetails('')}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};
export default PlaylistListItem;