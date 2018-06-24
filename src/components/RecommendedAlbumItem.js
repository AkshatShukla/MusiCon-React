import React from 'react'

const RecommendedAlbumItem = ({album, removeAlbum}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={album.imageUrl} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <p>By {album.artist}</p>
                <form action={album.externalUrl}>
                    <button className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Spotify</button>
                </form>
            </div>
            <div className="card-footer">
                <small className="text-muted">Release Date: {album.releaseDate}</small>
            </div>
            <div className="card-footer ">
                <button className="btn btn-outline-danger" onClick={() => removeAlbum(album, 'album')}>
                    <span><i className="fa fa-trash"></i>&nbsp;</span>Remove
                </button>
            </div>
        </div>
    )
};

export default RecommendedAlbumItem