import {combineReducers, createStore} from 'redux';
import userReducer from './features/users/usersSlice';


const rootReducer= combineReducers({
    user: userReducer
})


const store = createStore(rootReducer);

export default store;