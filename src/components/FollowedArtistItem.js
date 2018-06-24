import React from 'react'

const FollowedArtistItem = ({artist, unfollowArtist}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            {artist.imageUrl !== ''
                ? <img className="card-img-top" src={artist.imageUrl} alt='' />
                : <h5><i>Image not available</i></h5>}
            <div className="card-body">
                <h5 className="card-title">{artist.name}</h5>
                <form action={artist.url}>
                    <button className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Spotify</button>
                </form>
            </div>
            <div className="card-footer">
                <small className="text-muted">Popularity: {artist.popularity}</small>
            </div>
            <div className="card-footer ">
                <button className="btn btn-outline-danger" onClick={() =>unfollowArtist(artist, 'artist')}>
                    <span><i className="fa fa-thumbs-down"></i>&nbsp;</span>Un-Follow
                </button>
            </div>
        </div>
    )
};

export default FollowedArtistItem