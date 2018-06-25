import React from 'react';

class AllRecommendedAlbum extends React.Component {

    constructor(props){
        super(props);
        this.props.allRecommendedAlbum();
    }

    renderList(albums){
        return albums.map(album =>
            <tr>
                <td>{album.album.name}</td>
                <td>{album.user.username}</td>
                <td><button type='btn' className='btn' onClick={() => this.props.deleteRecommendedAlbum(album._id)}>Delete</button></td>
            </tr>)
    }

    render() {
        return (
            <div className='container-fluid'>
                <h3>All albums Recommended by all Audiophiles</h3>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th scope="col">Album Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderList(this.props.allAlbums)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AllRecommendedAlbum;