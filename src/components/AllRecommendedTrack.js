import React from 'react';

class AllRecommendedTrack extends React.Component {

    constructor(props){
        super(props);
        this.props.allRecommendedTrack();
    }

    renderList(tracks){
        return tracks.map(track =>
            <tr>
                <td>{track.track.name}</td>
                <td>{track.user.username}</td>
                <td><button className='btn' onClick={() => this.props.deleteRecommendedTrack(track._id)}>Delete</button></td>
            </tr>)
    }

    render() {
        return (
            <div className='container-fluid'>
                <h3>All tracks Recommended by all Audiophiles</h3>
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

export default AllRecommendedTrack;