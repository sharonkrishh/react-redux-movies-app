import { combineReducers } from 'redux';
import searchReducer from './searchReducer';


export default combineReducers({
    moviesList: searchReducer
})