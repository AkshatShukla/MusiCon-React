import RecommendedAlbums from "../components/RecommendedAlbums";
import {connect} from "react-redux";
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    fetchRecommendedAlbums: (type) =>
        actions.fetchRecommended(dispatch, type),
    removeAlbum: (album, type) =>
        actions.itemUnrecommended(dispatch, album, type)
});
const stateToPropsMapper = state => ({
    recommendedAlbums: state.recommendedAlbums
});
const RecommendedAlbumsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(RecommendedAlbums);
export default RecommendedAlbumsContainer;