import authReducer from './authReducer'
import discussionReducer from './discussionReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    discussion: discussionReducer
});

export default rootReducer
