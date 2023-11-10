import {applyMiddleware, combineReducers, createStore} from 'redux';
import userReducer from './features/users/usersSlice';
import artistReducer from './features/artist/artistSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const rootReducer= combineReducers({
    user: userReducer,
    artist: artistReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;