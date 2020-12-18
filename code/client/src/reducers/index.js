import pageAnimationsReducer from './pageAnimationsReducer';
import userPageHistoryReducer from './userPageHistoryReducer';
import currentUserReducer from './currentUserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    pageAnimationsReducer,
    userPageHistoryReducer,
    currentUserReducer,
});

export default rootReducer;
