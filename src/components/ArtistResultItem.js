import React from 'react'

const ArtistResultItem = ({result,like}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img className="card-img-top" src={result.images.length !== 0 ? result.images[0].url : ''} alt="No Image Available"/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>Genres:</p>
                <ul className="list-group">
                    {result.genres.map(genre => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
                <br/>
                <a href={result['external_urls'].spotify}>Show on Spotify</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">Followers: {result.followers.total}</small>
            </div>
            <div className="card-footer ">
                <button onClick={() =>like(result,'artist')}>Like</button>
            </div>
        </div>
    )
};

export default ArtistResultItem;