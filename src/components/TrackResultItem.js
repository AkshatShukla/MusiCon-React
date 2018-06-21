import React from 'react'

const TrackResultItem = ({result}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={result.album.images.length !== 0 ? result.album.images[0].url : ''} alt="No Image Available"/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>Duration (ms) {result.duration_ms}</p>
                <a href={result['external_urls'].spotify}>Show on Spotify</a>
                <br/>
                <a href={result.preview_url !== null ? result.preview_url : ''}>Preview Track</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">Popularity: {result.popularity}</small>
            </div>
        </div>
    )
};

export default TrackResultItem;