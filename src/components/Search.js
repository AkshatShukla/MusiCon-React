import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
            albums: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({keyword: event.target.value});
    }
    handleSubmit(event) {
        console.log(this.state.keyword);
        let url = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=ALBUMNAME&api_key=936c99c515a1eeafd21e0ca253de20d8&format=json';
        // url += '?apikey=YOURKEY';
        // url += '&s=' + this.state.keyword;
        fetch(url.replace('ALBUMNAME', this.state.keyword))
            .then(res => res.json())
            .then(result => {
                //this.setState({albums: json.Search});
                console.log(result.results.albummatches.album);
                this.setState({albums: result.results.albummatches.album})
            })
    }
    printResult() {
        return (
            <ul className="list-group">
                {this.state.albums.map((album) => (
                    <li className="list-group-item" key={album.mbid}>
                        {album.name} by {album.artist} &nbsp;
                        <img src={album.image[1]['#text']}>

                        </img>
                        </li>
                ))}
                </ul>
        )
    }
    render() {
        return (
            <div>
                <h2>Search</h2>
                <div className="input-group">
                    <input value={this.state.keyword}
                            onChange={this.handleChange}
                            className="form-control"
                           placeholder="keyword"/>
                    <form className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>
                            Search
                        </button>
                    </form>
                    <br/>
                    <h2>Results {this.printResult()}</h2>
                </div>
            </div>
        )
    }
}

export default Search