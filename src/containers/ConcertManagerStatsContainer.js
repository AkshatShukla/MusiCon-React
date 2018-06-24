import ConcertManagerStats from "../components/ConcertManagerStats";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // functions to be written
});
const stateToPropsMapper = state => ({
    username: state.username
});
const ConcertManagerStatsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ConcertManagerStats);
export default ConcertManagerStatsContainer;