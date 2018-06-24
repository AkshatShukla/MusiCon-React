import SearchServiceClient from '../services/search.service.client'
import UserServiceClient from '../services/user.service.client'
import * as constants from "../constants";
import GetDetailsServiceClient from "../services/get-details.service.client";
import EventServiceClient from "../services/event.service.client";
import AlbumServiceClient from '../services/album.service.client';
import TrackServiceClient from '../services/track.service.client';
import ArtistServiceClient from "../services/artist.service.client";
import AdminServiceClient from "../services/admin.service.client";
import PlaylistServiceClient from "../services/playlist.service.client";
import AudiophileServiceClient from "../services/audiophile.service.client";

export const queryChanged = (dispatch, newQuery) => (
    dispatch({
        type: constants.QUERY_CHANGED,
        query: newQuery
    })
);

export const searchTypeChanged = (dispatch, newType) => (
    dispatch({
        type: constants.TYPE_CHANGED,
        searchType: newType
    })
);

export const searchQuery = (dispatch, query, queryType) => {

    if (queryType.value === 'events') {
        let searchServiceClient = SearchServiceClient.instance;
        searchServiceClient.searchEvents(query.value)
            .then(response => {
                response.json()
                    .then(results =>
                        dispatch({
                            type: constants.SEARCH,
                            flag: 'events',
                            results: results
                        })
                    )
            });
    }
    else {
        let searchServiceClient = SearchServiceClient.instance;
        searchServiceClient
            .searchQuery(query.value, queryType.value)
            .then((results) => {
                var rootKey;
                for (var ele in results) {
                    rootKey = ele;
                }
                if (rootKey === 'albums') {
                    dispatch({
                        type: constants.SEARCH,
                        flag: 'album',
                        results: results.albums.items
                    })
                } else if (rootKey === 'tracks') {
                    dispatch({
                        type: constants.SEARCH,
                        flag: 'track',
                        results: results.tracks.items
                    })
                } else if (rootKey === 'artists') {
                    dispatch({
                        type: constants.SEARCH,
                        flag: 'artist',
                        results: results.artists.items
                    })
                }
            });
    }
};
export const textChanged = (dispatch, type, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        fieldType: type,
        text: newText
    })
);

export const selectUserType = (dispatch, type) => (
    dispatch({
        type: constants.SAVE_USERTYPE,
        userType: type
    })
);

export const registerManager = (dispatch, username, password, verifyPassword, userType, eventLocation) => {
    if (password !== verifyPassword)
        alert("Password doesn't match");
    else {
        UserServiceClient.instance
            .registerManager(username, password, userType, eventLocation)
            .then(response => {
                if (response.status === 500) {
                    alert('username already exist')
                }
                else {
                    dispatch({
                        type: constants.SAVE_USERNAME_AND_USERTYPE,
                        username: username,
                        userType: userType
                    })
                }
            })
    }
};

export const registerUser = (dispatch, username, password, verifyPassword, userType) => {
    if (password !== verifyPassword)
        alert("Password doesn't match");
    else {
        UserServiceClient.instance
            .registerUser(username, password, userType)
            .then(response => {
                if (response.status === 500) {
                    alert('username already exist')
                }
                else {
                    dispatch({
                        type: constants.SAVE_USERNAME_AND_USERTYPE,
                        username: username,
                        userType: userType
                    })
                }
            })
    }
};

export const updateUser = (user) => (
    UserServiceClient.instance
        .updateUser(user)
);
export const updateStateWithUserNameAndType = (dispatch, username, type) => (
    dispatch({
        type: constants.SAVE_USERNAME_AND_USERTYPE,
        username: username,
        userType: type
    })
);
export const getProfile = (dispatch) => (
    UserServiceClient.instance
        .profile()
        .then(response => dispatch({
            type: constants.FETCH_PROFILE,
            data: response
        }))
);

export const login = (dispatch, username, password) => (
    UserServiceClient.instance
        .login(username, password)

);

export const searchEventsForUser = (dispatch) => {
    EventServiceClient.instance
        .findEventsForUser()
        .then(response => {
            if (response.status === 501) {
                alert('Please Update Location Information in profile Page')
            }
            else{
            response.json()
            .then(result => {


                dispatch({
                    type: constants.EVENTS_NEAR_USER,
                    events: result
                })}
            )}})


};

export const logout = (dispatch) => (
    UserServiceClient.instance
        .logout()
        .then(() =>
            dispatch({
                type: constants.LOGOUT
            })
        )
);
export const selectedItem = (dispatch, artist, item, type, id) => {
    let getDetailsServiceClient = GetDetailsServiceClient.instance;
    if (type === 'track') {
        getDetailsServiceClient
            .getTrackInfo(artist, item)
            .then(response => {
                response.json().then((res) => {
                    console.log(res);
                    dispatch({
                        type: constants.SET_DETAILS,
                        flag: 'track',
                        result: res,
                        id: id
                    })
                })
            })
    } else if (type === 'album') {
        getDetailsServiceClient
            .getAlbumInfo(artist, item)
            .then(response => {
                response.json().then((res) => {
                    console.log(res);
                    dispatch({
                        type: constants.SET_DETAILS,
                        flag: 'album',
                        result: res,
                        id: id
                    })
                })
            })
    } else if (type === 'artist') {
        getDetailsServiceClient
            .getArtistInfo(artist)
            .then(response => {
                response.json().then((res) => {
                    console.log(res);
                    dispatch({
                        type: constants.SET_DETAILS,
                        flag: 'artist',
                        result: res,
                        id: id
                    })
                })
            })
    }
};

export const toggleDetails = (dispatch, id) => {
    dispatch({
        type: constants.TOGGLE,
        id: id
    })
};

export const togglePlaylist = (dispatch, id) => (
    dispatch({
        type: constants.TOGGLE_PLAYLIST,
        id: id
    })
);

export const toggleEvent = (dispatch, id) => (
    dispatch({
        type: constants.TOGGLE_EVENT,
        id: id
    })
);

export const itemLiked = (dispatch, item, type) => {
    if (type === 'album') {
        AlbumServiceClient.instance
            .saveLike(item)
            .then(response => {
                if (response.status === 501) {
                    alert("Already liked");
                }
                else if (response.status === 500) {
                    alert("Try Logging in");
                }
                else {
                    alert("Liked Album " + item.name);
                }
            })
    }
    else if (type === 'track') {
        TrackServiceClient.instance
            .saveLike(item)
            .then(response => {
                if (response.status === 501) {
                    alert("Already liked");
                }
                else if (response.status === 500) {
                    alert("Try Logging in");
                }
                else {
                    alert('Liked Track ' + item.name);
                }
            })
    }
    else if (type === 'artist') {
        ArtistServiceClient.instance
            .follow(item)
            .then(response => {
                if (response.status === 501) {
                    alert("Already liked");
                }
                else if (response.status === 500) {
                    alert("Try Logging in");
                }
                else {
                    alert("Liked Album " + item.name);
                }
            })
    }
};

export const itemDisliked = (dispatch, item, type) => {
    if (type === 'album') {
        AlbumServiceClient.instance
            .saveDislike(item)
            .then(response => {
                alert('Disliked Album' + item.name);
                AlbumServiceClient.instance
                    .getLikedAlbums()
                    .then(response => {
                        response.json()
                            .then((result) => {
                                dispatch({
                                    type: constants.FETCH_LIKED_ITEMS,
                                    itemType: 'album',
                                    likedAlbums: result
                                })
                            });
                    });
            })
    }
    else if (type === 'track') {
        TrackServiceClient.instance
            .saveDislike(item)
            .then(response => {
                alert('Disliked Track' + item.name);
                TrackServiceClient.instance
                    .getLikedTracks()
                    .then(response => {
                        response.json()
                            .then((result) => {
                                dispatch({
                                    type: constants.FETCH_LIKED_ITEMS,
                                    itemType: 'track',
                                    likedTracks: result
                                })
                            });
                    });
            })
    }
    else if (type === 'artist') {
        ArtistServiceClient.instance
            .unfollow(item)
            .then(response => {
                alert('Un-followed Artist' + item.name);
                ArtistServiceClient.instance
                    .getFollowedArtists()
                    .then(response => {
                        response.json()
                            .then((result) => {
                                dispatch({
                                    type: constants.FETCH_LIKED_ITEMS,
                                    itemType: 'artist',
                                    followedArtists: result
                                })
                            });
                    });
            })
    }
};

export const createEvent = (dispatch, eventName, venueName, eventDate) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .createEvent(eventName, venueName, eventDate)
        .then(response => {
            eventServiceClient
                .findAllEventOFUser()
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.ALL_EVENTS_FOR_USER,
                                events: res.events
                            })
                        })
                })
        })
};

export const findAllEventOfUser = (dispatch) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .findAllEventOFUser()
        .then(response => {
            response.json()
                .then(res => {
                    dispatch({
                        type: constants.ALL_EVENTS_FOR_USER,
                        events: res.events
                    })
                })
        })
};

export const deleteEventForConcertManager = (dispatch, event) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .deleteEvent(event._id)
        .then(response => {
            eventServiceClient
                .findAllEventOFUser()
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.ALL_EVENTS_FOR_USER,
                                events: res.events
                            })
                        })
                })
        })
};

export const getUsers = (dispatch) => {
    AdminServiceClient.instance
        .getUsers()
        .then(response => response.json()
            .then(users => {
                dispatch({
                    type: constants.ADMIN_SAVE_USERS,
                    users: users
                })
            }))
};

export const createPlaylist = (dispatch, playlistName, playlistDescription) => {
    let playlistServiceClient = PlaylistServiceClient.instance;
    playlistServiceClient
        .createPlaylist(playlistName, playlistDescription)
        .then(response => {
            playlistServiceClient
                .findAllPlaylistOFUser()
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.ALL_PLAYLIST_FOR_USER,
                                playlists: res.playlist
                            })
                        })
                })
        })
};

export const findAllPlaylistOfUser = (dispatch) => {
    let playlistServiceClient = PlaylistServiceClient.instance;
    playlistServiceClient
        .findAllPlaylistOFUser()
        .then(response => {
            response.json()
                .then(res => {
                    dispatch({
                        type: constants.ALL_PLAYLIST_FOR_USER,
                        playlists: res.playlist
                    })
                })
        })
};

export const deletePlaylist = (dispatch, playlist) => {
    let playlistServiceClient = PlaylistServiceClient.instance;
    playlistServiceClient
        .deletePlaylist(playlist._id)
        .then(response => {
            playlistServiceClient
                .findAllPlaylistOFUser()
                .then(response1 => {
                    response1.json()
                        .then(res => {
                            dispatch({
                                type: constants.ALL_PLAYLIST_FOR_USER,
                                playlists: res.playlist
                            })
                        })
                })
        })
};

export const getTracksInPlaylist = (dispatch, playlist, id) => {
    let playlistServiceClient = PlaylistServiceClient.instance;
    playlistServiceClient
        .getTracksInPlaylist(playlist._id)
        .then(response => {
            response.json()
                .then(results =>
                    dispatch({
                        type: constants.TRACKS_IN_PLAYLIST,
                        tracks: results.track,
                        id: id
                    }))
        })
};

export const fetchLikedAlbums = (dispatch) => {
    let albumServiceClient = AlbumServiceClient.instance;
    albumServiceClient
        .getLikedAlbums()
        .then(response => {
            response.json()
                .then((result) => {
                    dispatch({
                        type: constants.FETCH_LIKED_ITEMS,
                        itemType: 'album',
                        likedAlbums: result
                    })
                });
        });
};

export const fetchLikedTracks = (dispatch) => {
    let trackServiceClient = TrackServiceClient.instance;
    trackServiceClient
        .getLikedTracks()
        .then(response => {
            response.json()
                .then((result) => {
                    dispatch({
                        type: constants.FETCH_LIKED_ITEMS,
                        itemType: 'track',
                        likedTracks: result
                    })
                });
        });
};

export const fetchFollowedArtists = (dispatch) => {
    let artistServiceClient = ArtistServiceClient.instance;
    artistServiceClient
        .getFollowedArtists()
        .then(response => {
            response.json()
                .then((result) => {
                    dispatch({
                        type: constants.FETCH_LIKED_ITEMS,
                        itemType: 'artist',
                        followedArtists: result
                    })
                });
        });
};

export const updateUserAdmin = (dispatch, user) => {
    AdminServiceClient.instance
        .updateUser(user)
        .then(() => AdminServiceClient.instance
            .getUsers()
            .then(response => response.json()
                .then(users => {
                    dispatch({
                        type: constants.ADMIN_SAVE_USERS,
                        users: users
                    })
                })));
};

export const deleteUserAdmin = (dispatch, id) => {
    AdminServiceClient.instance
        .deleteUser(id)
        .then(() => AdminServiceClient.instance
            .getUsers()
            .then(response => response.json()
                .then(users => {
                    dispatch({
                        type: constants.ADMIN_SAVE_USERS,
                        users: users
                    })
                })));
};

export const getArtistsInEvent = (dispatch, event, id) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .getArtistsInEvent(event._id)
        .then(response => {
            response.json()
                .then(results =>
                    dispatch({
                        type: constants.ARTISTS_IN_EVENT,
                        artists: results.artist,
                        id: id
                    }))
        })
};

export const addTrackToPlaylist = (dispatch, track, playlist) => {
    let playlistServiceClient = PlaylistServiceClient.instance;
    playlistServiceClient
        .addTrackToPlaylist(playlist, track)
        .then(response => {
            if (response.status === 501) {
                alert("Already Added");
            }
            else if (response.status === 500) {
                alert("Try Logging in");
            }
            else {
                alert('Track Added to Playlist');
            }
        })
};

export const recommend = (dispatch, item, type) => {
    AudiophileServiceClient.instance
        .recommend(item, type)
        .then(response => {
            if (response.status === 501) {
                alert("Already Recommended");
            }
            else if (response.status === 500) {
                alert("Try Logging in");
            }
            else {
                alert("Recommended Album " + item.name);
            }
        })
};

export const deleteTrackFromPlaylist = (dispatch, track, playlist) => {
    let playlistServiceClient = PlaylistServiceClient.instance;
    playlistServiceClient
        .deleteTrackFromPlaylist(playlist, track)
        .then(() => {
            alert('track removed');
            playlistServiceClient
                .getTracksInPlaylist(playlist._id)
                .then(response => {
                    response.json()
                        .then(results =>
                            dispatch({
                                type: constants.TRACKS_IN_PLAYLIST,
                                tracks: results.track
                            }))
                })
        })
};

export const addArtistToEvent = (dispatch, artist, event) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .addArtistToEvent(event, artist)
        .then(response => {
            if (response.status === 501)
                alert('Already Added')
            else if (response.status === 500)
                alert('try logging again')
            else
                alert('Artist Added to Event')
        })
};

export const deleteArtistFromEvent = (dispatch, artist, event) => {
    let eventServiceClient = EventServiceClient.instance;
    eventServiceClient
        .deleteArtistFromEvent(event, artist)
        .then(() => {
            alert('artist removed from event');
            eventServiceClient
                .getArtistsInEvent(event._id)
                .then(response => {
                    response.json()
                        .then(results =>
                            dispatch({
                                type: constants.ARTISTS_IN_EVENT,
                                artists: results.artist
                            }))
                })
        })
};

export const findAllAudiophile = (dispatch) => {
    AudiophileServiceClient.instance
        .getAllAudiophile()
        .then(response => response.json()
            .then(result =>
                dispatch({
                    type: constants.AUDIOPHILE_RESULTS,
                    audiophiles: result
                })))
};
export const followAudiophile = (dispatch, id, username) => {
    AudiophileServiceClient.instance
        .followAudiophile(id)
        .then(response => {
            if (response.status === 501) {
                alert('Already Followed ' + username);
            }
            else {
                alert('Followed Audiophile ' + username);
            }
        })
}
export const getAudiophileContent = (dispatch, id, type) => {
    AudiophileServiceClient.instance
        .getAudiophileContent(id, type)
        .then(response => response.json()
            .then(result => dispatch({
                type: constants.AUDIOPHILE_RECOMMEND_RESULTS,
                items: result,
                audiophileResultType: type
            }))
        )
    dispatch({
        type: constants.OPEN_AUDIOPHILE_DETAILS,
        id: id
    })
}
export const closeContentPane = (dispatch) => {
    dispatch({
        type: constants.CLOSE_AUDIOPHILE_DETAILS,
    })
}
