import React from 'react'
import NavigationBar from "../components/NavigationBar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginContainer from "./LoginContainer";
import ProfileContainer from "./ProfileContainer";
import SearchContainer from "./SearchContainer";
import RegistrationContainer from "./RegistrationContainer";
import {connect} from "react-redux";
import UserStatsContainer from "./UserStatsContainer";
import AdminPageContainer from "./AdminPageContainer";
import OrganizeEventContainer from "./OrganizeEventContainer";
import LikedAlbumsContainer from "./LikedAlbumsContainer";
import LikedTrackContainer from "./LikedTracksContainer";
import CreatePlaylistContainer from "./CreatePlaylistContainer";
// import EventsNearUserContainer from "../containers/EventsNearUserContainer";

class HomeComponent
    extends React.Component {
    render() {
        return (
            <Router>
                <div >
                    <div className="m-0">
                    <Route path="/"
                           component={NavigationBar}/>
                    </div>
                    <div className="m-0">
                        <Route path='/login'
                               component={LoginContainer}/>
                        <Route path='/registration'
                               component={RegistrationContainer}/>
                        <Route path='/profile'
                               component={ProfileContainer}/>
                        <Route exact path='/my-page'
                               component={UserStatsContainer}/>
                        <Route path='/my-page/liked-albums'
                               component={LikedAlbumsContainer}/>
                        <Route path='/my-page/liked-tracks'
                               component={LikedTrackContainer}/>
                        <Route path='/manager'
                               component={OrganizeEventContainer}/>
                        <Route path='/playlist'
                               component={CreatePlaylistContainer}/>
                        <Route path='/admin-page'
                               component={AdminPageContainer}/>
                        <Route exact path='/'
                               component={SearchContainer}/>
                    </div>
                </div>
            </Router>

        )
    }
}

const dispatchToPropsMapper = dispatch => ({});

const stateToPropsMapper = state => ({
    type: state.userType
});

const HomeContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(HomeComponent);
export default HomeContainer;


