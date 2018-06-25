import React from 'react'
import PlaylistContainer from '../containers/PlaylistContainer'

const CreatePlaylist = ({textChanged, createPlaylist}) => {
    let inputElem;
    let inputElem1;

    return (
        <div className='container-fluid'>
            <div className="col-12 bg-dark text-white rounded mt-2">
                <p className="lead">Create New Playlist</p>
            </div>
            <div className="cardRegistration card-container container-fluid rounded">
                <form className="form-inline m-2">
                    <label htmlFor="playlistName" className='col-2'>Enter Playlist Name:</label>
                    &nbsp;
                    <input className="col-9"
                           id="playlistName"
                           onChange={() => textChanged('playlistName', inputElem.value)}
                           ref={node => inputElem = node}/>
                </form>
                <br/>

                <form className="form-inline m-2">
                    <label htmlFor="playlistDescription" className='col-2'>Enter description:</label>
                    &nbsp;
                    <input className="col-9"
                           id="playlistDescription"
                           onChange={() => textChanged('playlistDescription', inputElem1.value)}
                           ref={node => inputElem1 = node}/>
                </form>
                <br/>
                <form className="form-inline m-2">
                    <button type='btn' onClick={() => createPlaylist(inputElem.value, inputElem1.value)}
                            className='btn btn-dark'
                            type="button">
                        Create Playlist
                    </button>
                </form>
            </div>

            <div className="col-12 bg-dark text-white rounded mt-2">
                <p className="lead">All Your Playlist</p>
            </div>

            <PlaylistContainer/>
        </div>)
};

export default CreatePlaylist;