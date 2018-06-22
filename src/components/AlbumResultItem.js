import React from 'react'

const AlbumResultItem = ({result,like}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={result.images[0].url} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>By {result.artists[0].name}</p>
                <a href={result['external_urls'].spotify}>Show on Spotify</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">Release Date: {result.release_date}</small>
            </div>
            <div className="card-footer ">
                <button onClick={() =>like(result,'album')}>Like</button>
            </div>
        </div>
    )
};

export default AlbumResultItem;