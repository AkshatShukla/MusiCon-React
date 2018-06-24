import React from 'react'

const FollowedAudiophileItem = ({audiophile, unfollowAudiophile}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
                <h5 className="card-title">{audiophile.username}</h5>
                {audiophile.description !== undefined ? <p>{audiophile.description}</p> : <p>No Description Available</p>}
            </div>
            <div className="card-footer ">
                <button className="btn btn-outline-danger" onClick={() => unfollowAudiophile(audiophile, 'audiophile')}>
                    <span><i className="fa fa-trash"></i>&nbsp;</span>Un-Follow
                </button>
            </div>
        </div>
    )
};

export default FollowedAudiophileItem