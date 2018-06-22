import React from  'react'
import NavigationBar from "../components/NavigationBar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginContainer from "./LoginContainer";
import ProfileContainer from "./ProfileContainer";
import SearchContainer from "./SearchContainer";
import RegistrationContainer from "./RegistrationContainer";
import {connect} from "react-redux";
import EventsNearUserContainer from "../containers/EventsNearUserContainer";
import OrganizeEventContainer from "./OrganizeEventContainer";

class HomeComponent
    extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/"
                           component={NavigationBar}/>
                    <Route path="/"
                           component={SearchContainer}/>
                    <Route path='/login'
                    component={LoginContainer}/>
                    <Route path='/registration'
                           component={RegistrationContainer}/>
                    <Route path='/profile'
                           component={ProfileContainer}/>
                    <Route path='/event'
                           component={OrganizeEventContainer}/>
                </div>
            </Router>

        )
    }
}
const dispathToPropsMapper = dispatch => ({
});

const stateToPropsMapper = state => ({
    type:state.userType
});

const HomeContainer = connect(stateToPropsMapper, dispathToPropsMapper)(HomeComponent)
export default HomeContainer;


