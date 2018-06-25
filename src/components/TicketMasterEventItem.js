import React from 'react'

const TicketMasterEventItem = ({event}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
                <img className="card-img-top" src={event.images[0].url} alt='' style={{marginBottom: '10px'}}/>
                <h5 className="card-title">{event.name}</h5>
                <p>at {event._embedded.venues[0].name}</p>
                <form action={event.url}>
                    <button type='btn' className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Ticket Master
                    </button>
                </form>
                {event.seatmap !== undefined
                    ?
                    <form action={event.seatmap.staticUrl}>
                        <button type='btn' className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Seat Map
                        </button>
                    </form>
                    :
                    <span>&nbsp;</span>}
            </div>
            <div className="card-footer">
                <small className="text-muted">Concert Date: {event.dates.start.localDate}</small>
                <br/>
                <small className="text-muted">Concert Time: {event.dates.start.localTime.substr(0, 5)}</small>
            </div>
            {event.priceRanges !== undefined
                ?
                <div className="card-footer">
                    <small className="text-muted">Price Range:
                        USD {event.priceRanges[0].min} - {event.priceRanges[0].max}</small>
                </div>
                : <span>&nbsp;</span>}
        </div>
    )
};

export default TicketMasterEventItem