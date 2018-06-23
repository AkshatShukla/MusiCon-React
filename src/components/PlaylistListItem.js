import React from 'react'

const PlaylistListItem = ({playlist,deletePlaylist, getTracksInPlaylist, tracksInPlaylist}) => {

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded " >
            <div className="card-body">
                <h5 className="card-title">{playlist.name}</h5>
                <h6>{playlist.description}</h6>
            </div>
            <div className="card-footer">
            </div>
            <button className='btn' onClick={() => getTracksInPlaylist(playlist)}>Tracks Present</button>
            <button className='btn' onClick={() => deletePlaylist(playlist)}>Delete</button>
        </div>
    )
};
export default PlaylistListItem;