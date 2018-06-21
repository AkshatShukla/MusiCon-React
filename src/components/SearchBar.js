import React from 'react'
import ResultListContainer from "../containers/ResultListContainer";

const SearchBar = ({queryChanged, searchTypeChanged, searchQuery}) => {
    let selectElem;
    let inputElem;
    return (
        <div className="container-fluid"
        style={{marginTop: '10px'}}>
            <div className="form-group row container-fluid">
                <input onChange={() => queryChanged(inputElem.value)}
                       ref={node => inputElem = node}
                       placeholder="Query"/>
            </div>
            <div className="form-group row container-fluid">
                <label htmlFor="example-text-input" className="col-form-label">Type:&nbsp;</label>
                <select className="dropdown"
                        onChange={() => searchTypeChanged(selectElem.value)}
                        ref={node => selectElem = node}>
                    <option value="album" selected className="dropdown-item">Album</option>
                    <option value="track" className="dropdown-item">Track</option>
                    <option value="artist" className="dropdown-item">Artist</option>
                    <option value="events" className="dropdown-item">Events</option>
                </select>
            </div>
            <button className="btn btn-sm btn-primary" onClick={e => searchQuery(inputElem, selectElem)}>
                <i className="fa fa-search" aria-hidden="true">
                </i>
            </button>
            <ResultListContainer/>
        </div>
    )
};

export default SearchBar;