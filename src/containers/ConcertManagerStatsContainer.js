import ConcertManagerStats from "../components/ConcertManagerStats";
import {connect} from "react-redux";

const dispatchToPropsMapper = dispatch => ({

});
const stateToPropsMapper = state => ({
    username: state.username,
    description: state.description
});
const ConcertManagerStatsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ConcertManagerStats);
export default ConcertManagerStatsContainer;