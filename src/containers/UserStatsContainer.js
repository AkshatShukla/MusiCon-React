import UserStats from "../components/UserStats";
import {connect} from "react-redux";

const dispatchToPropsMapper = dispatch => ({
});
const stateToPropsMapper = state => ({
    username: state.username,
    description: state.description
});
const UserStatsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(UserStats);
export default UserStatsContainer;