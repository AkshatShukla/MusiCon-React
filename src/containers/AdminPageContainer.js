import AdminPage from "../components/AdminPage";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    // functions to be written
});
const stateToPropsMapper = state => ({
    // albumResults: state.albumResults,
    // trackResults: state.trackResults,
    // artistResults: state.artistResults,
    // eventResults: state.eventResults,
    // modalToggle: state.modalToggle,
    // details: state.details,
    // flag: state.searchFlag
});
const AdminPageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AdminPage);
export default AdminPageContainer;