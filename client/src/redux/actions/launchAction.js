import * as types from './actionTypes';

export function receiveLaunches(json) {
  return {type: types.RECEIVE_LAUNCHES, launches: json};
}

export function fetchLaunches() {
  return dispatch => {
    console.log('test')
    return fetch('http://localhost:3001/api/launches', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        return ({});
      }
    }).then(json => {
      dispatch(receiveLaunches(json));
    }).catch();
  };
}
