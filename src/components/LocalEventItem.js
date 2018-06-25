import React from 'react';
import concertImage from '../images/concert-image.jpg';

const LocalEventItem = ({event}) => {

    function renderArtistsInEvent() {
        return event.artist.map((artist) => (
            <li key={artist._id}>
                {artist.name}
            </li>
        ))
    }

    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
                <img className="card-img-top" src={concertImage} alt='' style={{marginBottom: '10px'}}/>
                <h5 className="card-title">{event.name}</h5>
                <p className="card-subtitle">at {event.location}</p>
                <p><i>Artists Performing: </i></p>
                <ul className="list-group">
                    {renderArtistsInEvent()}
                </ul>
            </div>
            <div className="card-footer">
                <small className="text-muted">Concert Date: {event.date.substr(0, 10)}</small>
            </div>
        </div>
    )
};

export default LocalEventItem