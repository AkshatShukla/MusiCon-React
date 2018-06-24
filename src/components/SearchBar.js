import React from 'react'
import ResultListContainer from "../containers/ResultListContainer";
import {Jumbotron, Container} from 'reactstrap'

const SearchBar = ({queryChanged, searchTypeChanged, searchQuery}) => {
    let selectElem;
    let inputElem;
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Search</h1>
                    <p className="lead">Search albums, tracks, artists and even events!</p>
                    <hr className="my-2"/>
                    <div className="container-fluid row p-2"
                         style={{marginTop: '10px', border: '3px', borderColor: 'black'}}>
                        <div className="form-group col-9 container-fluid">
                            <input style={{width: '100%', height: '100%'}}
                                   onChange={() => queryChanged(inputElem.value)}
                                   ref={node => inputElem = node}
                                   placeholder="Query"/>
                        </div>
                        <div className="form-group col-2 container-fluid ">
                            <select className="dropdown"
                                    style={{width: '100%', height: '100%'}}
                                    onChange={() => searchTypeChanged(selectElem.value)}
                                    ref={node => selectElem = node}
                                    defaultValue="album">
                                <option value="album" className="dropdown-item">Album</option>
                                <option value="track" className="dropdown-item">Track</option>
                                <option value="artist" className="dropdown-item">Artist</option>
                                <option value="events" className="dropdown-item">Events</option>
                            </select>
                        </div>
                        <div className=" form-group col-1 container-fluid">
                            <button className="btn btn-sm btn-primary"
                                    style={{width: '100%', height: '100%'}}
                                    onClick={e => searchQuery(inputElem, selectElem)}>
                                <i className="fa fa-search" aria-hidden="true">
                                </i>
                            </button>
                        </div>
                    </div>
                    <ResultListContainer/>
                </Container>
            </Jumbotron>
        </div>
    )
};

export default SearchBar;