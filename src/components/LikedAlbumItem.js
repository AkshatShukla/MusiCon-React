import React from 'react'

const LikedAlbumItem = ({album, dislikeAlbum}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={album.imageUrl} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <p>By {album.artist}</p>
                <form action={album.externalUrl}>
                    <button type='btn' className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Spotify</button>
                </form>
            </div>
            <div className="card-footer">
                <small className="text-muted">Release Date: {album.releaseDate}</small>
            </div>
            <div className="card-footer ">
                <button type='btn' className="btn btn-outline-danger" onClick={() =>dislikeAlbum(album, 'album')}>
                    <span><i className="fa fa-thumbs-down"></i>&nbsp;</span>Dislike
                </button>
            </div>
        </div>
    )
};

export default LikedAlbumItem