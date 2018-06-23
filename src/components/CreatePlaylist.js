import React from 'react'
import PlaylistContainer from '../containers/PlaylistContainer'

const CreatePlaylist = ({textChanged, createPlaylist}) => {
    let inputElem;
    let inputElem1;

    return (
        <div>
            <form className="form-inline">
                <label htmlFor="playlistName">Enter Playlist Name:</label>
                &nbsp;
                <input className="col-8"
                       id="playlistName"
                       onChange={() => textChanged('playlistName', inputElem.value)}
                       ref={node => inputElem = node}/>
            </form>
            <br/>

            <form className="form-inline">
                <label htmlFor="playlistDescription">Enter description:</label>
                &nbsp;
                <input className="col-8"
                       id="playlistDescription"
                       onChange={() => textChanged('playlistDescription', inputElem1.value)}
                       ref={node => inputElem1 = node}/>
            </form>
            <br/>

            <button onClick={() => createPlaylist(inputElem.value, inputElem1.value)}>
                Create Playlist
            </button>

            <PlaylistContainer/>
        </div>)
};

export default CreatePlaylist;