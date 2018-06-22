import React from 'react'
import AlbumResultItem from './AlbumResultItem'
import TrackResultItem from './TrackResultItem'
import ArtistResultItem from './ArtistResultItem'
import EventResultItem from './EventResultItem'

const ResultList = ({albumResults, trackResults, artistResults, eventResults, toggleDetails, modalToggle, details, flag, selectedTrack}) => {
    const renderListOfResults = (results, f) => {
        if (results !== undefined) {
            if (f === 'album') {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <AlbumResultItem result={result}/>
                    </div>
                ))
            }
            else if (f === 'track') {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <TrackResultItem result={result}
                                         selectedTrack={selectedTrack}
                                         details={details}
                                         modalToggle={modalToggle}
                                         toggleDetails={toggleDetails}/>
                    </div>
                ))
            }
            else if (f==='events'){
                return results.map((result) => (
                    <div className="col-sm-3">
                        <EventResultItem result={result}/>
                    </div>
                ))
            }
            else {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <ArtistResultItem result={result}/>
                    </div>
                ))
            }
        }
    };
    return (
        <div className="container-fluid bg-white">
            <br/>
            <h3 className="text-dark">Results</h3>
            <br/>
            <div className="card-deck row">
                {flag === 'album' && renderListOfResults(albumResults, flag)}
                {flag === 'track' && renderListOfResults(trackResults, flag)}
                {flag === 'artist' && renderListOfResults(artistResults, flag)}
                {flag === 'events' && renderListOfResults(eventResults,flag)}
            </div>
            <br/>
        </div>
    );
};

export default ResultList;