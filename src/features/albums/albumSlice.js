
const intialStateAlbums = [];

export default function albumReducer(state = intialStateAlbums, action) {
    switch (action.type) {
        case 'album/addAlbums':
            return [...state, { id: Date.now(), userName: action.payload }];

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
        default: return state;
    }

}

export function addAlbums(userName) {
    return { type: 'album/addAlbums', payload: userName }
}

export function editAlbums(id, userName) {
    return { type: 'album/editAlbums', payload: { id: id, userName: userName } }
}
export function deleteAlbums(id) {
    return { type: 'album/deleteAlbums', payload: id }
}