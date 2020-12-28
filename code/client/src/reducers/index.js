import pageAnimationsReducer from './pageAnimationsReducer';
import userPageHistoryReducer from './userPageHistoryReducer';
import currentUserReducer from './currentUserReducer';
import roomReducer from './roomReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    pageAnimationsReducer,
    userPageHistoryReducer,
    currentUserReducer,
    roomReducer,
});

export default rootReducer;
