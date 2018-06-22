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
// import EventsNearUserContainer from "../containers/EventsNearUserContainer";

class HomeComponent
    extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/"
                           component={NavigationBar}/>
                    <div className="container-fluid">
                        <Route path="/"
                               component={SearchContainer}/>
                        <Route path='/login'
                               component={LoginContainer}/>
                        <Route path='/registration'
                               component={RegistrationContainer}/>
                        <Route path='/profile'
                               component={ProfileContainer}/>
                        <Route path='/my-page'
                               component={UserStatsContainer}/>
                        <Route path='/admin-page'
                               component={AdminPageContainer}/>
                        {/*<Route path='/profile1'*/}
                               {/*component={EventsNearUserContainer}/>*/}
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


