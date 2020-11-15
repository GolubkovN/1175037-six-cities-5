import {AuthorizationStatus} from '../../../const';
import {ActionTypes} from '../../action';
import {extend} from '../../../utils/store';

const iState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const user = (state = iState, action) => {
  switch (action.type) {
    case ActionTypes.REQUIRED_AUTH:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }
  return state;
};
