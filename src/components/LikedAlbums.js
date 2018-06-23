import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap';
import LikedAlbumItem from './LikedAlbumItem';

class LikedAlbums extends React.Component {

    constructor(props) {
        super(props);
        this.props.fetchLikedAlbums();
    }

    showAlbums() {
        console.log(this.props.likedAlbums);
        return this.props.likedAlbums.map((album) => (
            <div className="col-sm-3"
                 key={album._id}>
                <LikedAlbumItem album={album}
                                dislikeAlbum={this.props.dislikeAlbum}/>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Liked Albums</h1>
                    <p className="lead">All the albums you love listening to</p>
                    <hr className="my-2"/>
                    <Link style={{display: 'block', height: '100%'}}
                          to="/my-page">
                        <Button><span>
                    <i className="fa fa-arrow-left">&nbsp;</i>
                </span>My Page</Button>
                    </Link>
                    <div className="card-deck row">
                        {this.showAlbums()}
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default LikedAlbums;