import React from 'react'

const TrackResultItem = ({result, selectedTrack}) => {
    function millisToMinutesAndSeconds(millis) {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{width: '22rem'}}>
            <img className="card-img-top" src={result.album.images.length !== 0 ? result.album.images[0].url : ''}
                 alt="No Image Available"/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <p>By {result.artists[0].name}</p>
                <p>Duration: {millisToMinutesAndSeconds(result.duration_ms)}</p>
                <button className="btn-outline-dark" style={{marginBottom : '10px'}}>
                    <a style={{color: 'grey'}} href={result['external_urls'].spotify}>Show on Spotify</a>
                </button>
                <br/>
                {/*<a href={result.preview_url !== null ? result.preview_url : ''}>Preview Track</a>*/}
                <button className="btn btn-outline-dark"
                        onClick={() => selectedTrack(result.artists[0].name, result.name)}>Get More Details
                </button>
            </div>
            <div className="card-footer">
                <small className="text-muted">Popularity: {result.popularity}
                    <audio controls>
                        <source src={result.preview_url !== null ? result.preview_url : ''}
                                style={{marginRight: '40px'}}/>
                    </audio>
                </small>
            </div>
        </div>
    )
};

export default TrackResultItem;