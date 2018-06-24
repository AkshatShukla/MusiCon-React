import {connect} from "react-redux";
import AllRecommendedAlbum from '../components/AllRecommendedAlbum'
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    allRecommendedAlbum: () => actions.allRecommendedAlbum(dispatch),
    deleteRecommendedAlbum: (recommendedAlbumId) => actions.deleteRecommendedAlbum(dispatch, recommendedAlbumId)
});
const stateToPropsMapper = state => ({
    allAlbums: state.admin.allRecommendedAlbum
});

const AllRecommendedAlbumContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AllRecommendedAlbum);
export default AllRecommendedAlbumContainer;