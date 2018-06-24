import {connect} from "react-redux";
import AllLikedAlbum from '../components/AllLikedAlbum'
import * as actions from "../actions";

const dispatchToPropsMapper = dispatch => ({
    allLikedAlbum: () => actions.allLikedAlbum(dispatch),
    deleteLikedAlbum: (likedAlbumId) => actions.deleteLikedAlbum(dispatch, likedAlbumId)
});
const stateToPropsMapper = state => ({
    allAlbums: state.admin.allLikedAlbum
});

const AllLikedAlbumContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AllLikedAlbum);
export default AllLikedAlbumContainer;