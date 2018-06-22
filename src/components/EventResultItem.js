import React from 'react'

const EventResultItem = ({result}) => {
    return (
        <div key={result.id} className="card shadow p-3 mb-5 bg-white rounded " >
            <img className="card-img-top" src={result.images[0].url} alt=''/>
            <div className="card-body">
                <h5 className="card-title">{result.name}</h5>
                <h6>{result._embedded.venues[0].name}</h6>
                <a href={result.url}>Show on Ticket Master</a>
            </div>
            <div className="card-footer">
                <small className="text-muted">Date: {result.dates.start.localDate}</small>
            </div>
        </div>
    )
};

export default EventResultItem;