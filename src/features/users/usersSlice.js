import { act } from "@testing-library/react";

const intialStateUsers=[];

export default function userReducer(state=intialStateUsers, action ){
    switch(action.type){
        case 'user/addUser':
             return [...state,{ id: state.length+1, userName: action.payload} ];
        case'user/editUser':
                
        default: return state;
    }
    
}

export function addUser( userName ){
    return {type:'user/addUser', payload: userName}
}