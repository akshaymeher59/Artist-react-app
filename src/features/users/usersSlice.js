
const intialStateUsers = [];

export default function userReducer(state = intialStateUsers, action) {
    switch (action.type) {
        case 'user/addUser':
            return [...state, { id: Date.now(), userName: action.payload }];

        case 'user/editUsers':
            state.splice(state.indexOf(...state.filter((data) => data.id === action.payload.id)), 1, {
                id: action.payload.id,
                userName: action.payload.userName
            });
            return state;
        case "user/deleteUsers":
            let updated = [...state]
            updated.splice(state.indexOf(...state.filter((data) => data.id === action.payload)), 1);
            return updated;
        default: return state;
    }

}

export function addUser(userName) {
    return { type: 'user/addUser', payload: userName }
}

export function editUsers(id, userName) {
    return { type: 'user/editUsers', payload: { id: id, userName: userName } }
}
export function deleteUsers(id) {
    return { type: 'user/deleteUsers', payload: id }
}