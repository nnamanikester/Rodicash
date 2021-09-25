import {SET_USER, UserActionTypes, UserType} from '../types';

const INITIAL_STATE: UserType = {
  email: null,
  name: null,
};

export default (
  state: UserType = INITIAL_STATE,
  action: UserActionTypes,
): UserType => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};
