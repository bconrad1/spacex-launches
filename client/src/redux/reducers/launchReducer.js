import initialState from '../initialState';
import {FETCH_LAUNCHES, RECEIVE_LAUNCHES} from '../actions/actionTypes';

export default function launchInfo(state = initialState.launches, action) {
  let newState;
  switch (action.type) {
    case FETCH_LAUNCHES:
      return action;
    case RECEIVE_LAUNCHES:
      newState = action.launches;
      return newState;
    default:
      return state;
  }
}