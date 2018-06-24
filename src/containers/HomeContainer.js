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
import ExploreAudiophileContainer from '../containers/ExploreAudiophileContainer'
import FollowedArtistsContainer from "./FollowedArtistsContainer";
import AudiophileStatsContainer from "./AudiophileStatsContainer";
import RecommendedAlbumsContainer from "./RecommendedAlbumsContainer";
import RecommendedTracksContainer from "./RecommendedTracksContainer";
import ConcertManagerStatsContainer from "./ConcertManagerStatsContainer";
import FollowedAudiophilesContainer from "./FollowedAudiophilesContainer";
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
                        <Route exact path='/my-page-audiophile'
                               component={AudiophileStatsContainer}/>
                        <Route exact path='/my-page-manager'
                               component={ConcertManagerStatsContainer}/>
                        <Route path='/my-page/liked-albums'
                               component={LikedAlbumsContainer}/>
                        <Route path='/my-page/liked-tracks'
                               component={LikedTrackContainer}/>
                        <Route path='/my-page/followed-artists'
                               component={FollowedArtistsContainer}/>
                        <Route path='/my-page/followed-audiophiles'
                               component={FollowedAudiophilesContainer}/>
                        <Route path='/my-page-audiophile/recommended-albums'
                               component={RecommendedAlbumsContainer}/>
                        <Route path='/my-page-audiophile/recommended-tracks'
                               component={RecommendedTracksContainer}/>
                        <Route path='/my-page-manager/create-event'
                               component={OrganizeEventContainer}/>
                        <Route path='/playlist'
                               component={CreatePlaylistContainer}/>
                        <Route path='/admin-page'
                               component={AdminPageContainer}/>
                        <Route path='/explore'
                               component={ExploreAudiophileContainer}/>
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


