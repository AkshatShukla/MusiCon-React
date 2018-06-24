import React from 'react'

export default class ExploreAudiophile extends React.Component {
    constructor(props){
        super(props);
        this.props.findAllAudiophile();
    }
    render() {
        return (
            <div className="card shadow p-3 mb-5 bg-white rounded">

            </div>
        )
    }
};
