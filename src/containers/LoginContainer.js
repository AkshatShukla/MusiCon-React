import {connect} from 'react-redux'
import Login from "../components/Login";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    textChanged: (type, newText) => actions.textChanged(dispatch, type, newText),
    login: (username, password) => actions.login(dispatch, username, password),
    updateStateWithUserNameAndType: (username,type) =>
        actions.updateStateWithUserNameAndType(dispatch,username,type)
});

const stateToPropsMapper = state => ({
});

const LoginContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Login)
export default LoginContainer;