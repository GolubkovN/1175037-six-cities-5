import {AuthorizationStatus} from '../../../const';
import {ActionTypes} from '../../action';
import {extend} from '../../../utils/store';

const iState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: ``,
};

export const user = (state = iState, action) => {
  switch (action.type) {
    case ActionTypes.REQUIRED_AUTH:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionTypes.CHANGE_LOGIN:
      return extend(state, {
        email: action.payload,
      });
  }
  return state;
};
