import {combineReducers} from 'redux';
import launchInfo from './launchReducer';

const rootReducer = combineReducers({
  launchInfo
});

export default rootReducer;