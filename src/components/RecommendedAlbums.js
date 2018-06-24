import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap';
import RecommendedAlbumItem from "./RecommendedAlbumItem";

class RecommendedAlbums extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchRecommendedAlbums('album');
    }

    showRecommendedAlbums() {
        return this.props.recommendedAlbums.map((album) => (
            <div className="col-sm-3"
                 key={album._id}>
                <RecommendedAlbumItem album={album}
                                      removeAlbum={this.props.removeAlbum}/>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Recommended Albums</h1>
                    <p className="lead">All the albums you have recommended!</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page-audiophile">
                        <Button><span>
                    <i className="fa fa-arrow-left">&nbsp;</i>
                </span>My Page</Button>
                    </Link>
                    <div className="card-deck row">
                        {this.showRecommendedAlbums()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default RecommendedAlbums;