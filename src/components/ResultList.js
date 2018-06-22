import React from 'react'
import AlbumResultItem from './AlbumResultItem'
import TrackResultItem from './TrackResultItem'
import ArtistResultItem from './ArtistResultItem'
import EventResultItem from './EventResultItem'

const ResultList = ({albumResults, trackResults, artistResults, eventResults,
                         modalToggle, details, flag, selectedTrack,toggleDetails,like}) => {
    const renderListOfResults = (results, f) => {
        if (results !== undefined) {
            if (f === 'album') {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <AlbumResultItem result={result} like={like}/>
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
                                         toggleDetails={toggleDetails} like={like}/>
                    </div>
                ))
            }
            else if (f==='events'){
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <EventResultItem result={result} like={like}/>
                    </div>
                ))
            }
            else {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <ArtistResultItem result={result} like={like}/>
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