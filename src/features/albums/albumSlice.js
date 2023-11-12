import { type } from "@testing-library/user-event/dist/type";

const intialStateAlbums = [];

export default function albumReducer(state = intialStateAlbums, action) {
    switch (action.type) {
        case 'album/addAlbums':
            return [...state, {
                id: Date.now(),
                userName: action.payload.userName,
                user: action.payload.user,
                artist: action.payload.artist,
                rating: 0
            }];

        case 'album/editAlbums':
            state.splice(state.indexOf(...state.filter((data) => data.id === action.payload.id)), 1, {
                id: action.payload.id,
                userName: action.payload.userName
            });
            return state;
        case "album/deleteAlbums":
            let updated = [...state]
            updated.splice(state.indexOf(...state.filter((data) => data.id === action.payload)), 1);
            return updated;
        case "album/addRating":
            let selectedAlbum = state.filter((album) => album.id === action.payload.id)[0];
            let copyOfstate = [...state];
            copyOfstate.splice(state.indexOf(selectedAlbum), 1, {
                ...selectedAlbum,
                rating: action.payload.rating
            }
            )
            return copyOfstate;
        default: return state;
    }

}

export function addAlbums(userName, user, artist) {
    return { type: 'album/addAlbums', payload: { userName, user, artist } }
}

export function editAlbums(id, userName) {
    return { type: 'album/editAlbums', payload: { id: id, userName: userName } }
}
export function deleteAlbums(id) {
    return { type: 'album/deleteAlbums', payload: id }
}

export function addRating(id, rating) {
    return { type: "album/addRating", payload: { id, rating } }
}