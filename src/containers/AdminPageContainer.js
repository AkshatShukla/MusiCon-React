import AdminPage from "../components/AdminPage";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    getUsers: () => actions.getUsers(dispatch),
    updateUser: (user) => actions.updateUserAdmin(dispatch,user),
    deleteUser :(id) => actions.deleteUserAdmin(dispatch,id)
});
const stateToPropsMapper = state => ({
    users:state.admin.users
});
const AdminPageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AdminPage);
export default AdminPageContainer;