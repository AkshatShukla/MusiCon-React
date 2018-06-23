import React from 'react'
import ResultListContainer from "../containers/ResultListContainer";

const SearchBar = ({queryChanged, searchTypeChanged, searchQuery}) => {
    let selectElem;
    let inputElem;
    return (
        <div>
        <div className="container-fluid row p-2"
             style={{marginTop: '10px',border:'3px',borderColor:'black'}}>
            <div className="form-group col-9 container-fluid">
                <input style={{width:'100%',height:'100%'}}
                       onChange={() => queryChanged(inputElem.value)}
                       ref={node => inputElem = node}
                       placeholder="Query"/>
            </div>
            <div className="form-group col-2 container-fluid ">
                <select className="dropdown"
                        style={{width:'100%',height:'100%'}}
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
                    style={{width:'100%',height:'100%'}}
                    onClick={e => searchQuery(inputElem, selectElem)}>
                <i className="fa fa-search" aria-hidden="true">
                </i>
            </button>
            </div>
        </div>
            <ResultListContainer/>
        </div>
    )
};

export default SearchBar;