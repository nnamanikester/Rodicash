import {authTokenActionTypes, authTokenType, SET_TOKEN} from '../types';

const INITIAL_STATE: authTokenType = null;

export default (
  state: authTokenType = INITIAL_STATE,
  action: authTokenActionTypes,
) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
