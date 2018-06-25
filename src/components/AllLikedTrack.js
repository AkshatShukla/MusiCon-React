import React from 'react';

class AllLikedTrack extends React.Component {

    constructor(props){
        super(props);
        this.props.allLikedTrack();
    }

    renderList(tracks){
        return tracks.map(track =>
            <tr>
                <td>{track.track.name}</td>
                <td>{track.user.username}</td>
                <td><button type='btn' className='btn' onClick={() => this.props.deleteLikedTrack(track._id)}>Delete</button></td>
            </tr>)
    }

    render() {
        return (
            <div className='container-fluid'>
                <h3>All tracks liked by all users</h3>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th scope="col">Track Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderList(this.props.allTracks)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AllLikedTrack;