import React from 'react'

const RecommendedTrackItem = ({track, removeTrack}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={track.imageUrl} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{track.name}</h5>
                <p>By {track.artist}</p>
                <form action={track.externalUrl}>
                    <button className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Spotify</button>
                </form>
            </div>
            <div className="card-footer">
                <small className="text-muted">Popularity: {track.popularity}</small>
            </div>
            <div className="card-footer ">
                <button className="btn btn-outline-danger" onClick={() => removeTrack(track, 'track')}>
                    <span><i className="fa fa-trash"></i>&nbsp;</span>Remove
                </button>
            </div>
        </div>
    )
};

export default RecommendedTrackItem