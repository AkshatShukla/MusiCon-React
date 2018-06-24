import React from 'react'
import AlbumResultItem from './AlbumResultItem'
import TrackResultItem from './TrackResultItem'
import ArtistResultItem from './ArtistResultItem'
import EventResultItem from './EventResultItem'

const ResultList = ({
                        albumResults, trackResults, artistResults, eventResults,
                        toggleDetails, modalToggle, playlistModalToggle, details, flag, selectedItem, like, type, playlistsForListener,
                        addTrackToPlaylist
                    }) => {
    const renderListOfResults = (results, f) => {
        if (results !== undefined) {
            if (f === 'album') {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <AlbumResultItem result={result}
                                         selectedItem={selectedItem}
                                         details={details}
                                         modalToggle={modalToggle}
                                         toggleDetails={toggleDetails}
                                         type={type}
                                         like={like}/>
                    </div>
                ))
            }
            else if (f === 'track') {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <TrackResultItem result={result}
                                         selectedItem={selectedItem}
                                         details={details}
                                         modalToggle={modalToggle}
                                         playlistModalToggle={playlistModalToggle}
                                         playlistsForListener={playlistsForListener}
                                         toggleDetails={toggleDetails}
                                         addTrackToPlaylist={addTrackToPlaylist}
                                         type={type}
                                         like={like}/>
                    </div>
                ))
            }
            else if (f === 'events') {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <EventResultItem result={result}/>
                    </div>
                ))
            }
            else {
                return results.map((result) => (
                    <div className="col-sm-3"
                         key={result.id}>
                        <ArtistResultItem result={result}
                                          selectedItem={selectedItem}
                                          details={details}
                                          modalToggle={modalToggle}
                                          toggleDetails={toggleDetails}
                                          like={like}
                                          type={type}/>
                    </div>
                ))
            }
        }
    };
    return (
        <div className="container-fluid bg-white">
            <br/>
            <br/>
            <div className="card-deck row">
                {flag === 'album' && renderListOfResults(albumResults, flag)}
                {flag === 'track' && renderListOfResults(trackResults, flag)}
                {flag === 'artist' && renderListOfResults(artistResults, flag)}
                {flag === 'events' && renderListOfResults(eventResults, flag)}
            </div>
            <br/>
        </div>
    );
};

export default ResultList;