import {
  ADD_CODE,
  SIGN_OUT,
  SIGN_IN,
  ERROR,
  RESET_ERROR,
} from '../actions/actionTypes';
import * as Interfaces from '../types';

export const initialState = {
  user: {
    name: '',
    email: '',
  } as Interfaces.UserInfo,
  qrCode: '',
  error: {
    code: '',
    message: '',
  } as Interfaces.Error,
};

type ACTIONTYPE =
  | {
      type: 'ADD_CODE';
      payload: {
        code: string;
      };
    }
  | {
      type: 'SIGN_IN';
      payload: Interfaces.UserInfo;
    }
  | {
      type: 'SIGN_OUT';
    }
  | {
      type: 'ERROR';
      payload: Interfaces.Error;
    }
  | {
      type: 'RESET_ERROR';
    };

const reducer = (
  state: typeof initialState = initialState,
  action: ACTIONTYPE,
) => {
  switch (action.type) {
    case ADD_CODE: {
      const {code} = action.payload;
      return Object.assign({}, state, {qrCode: code});
    }
    case SIGN_OUT: {
      return initialState;
    }
    case SIGN_IN: {
      const {name, email} = action.payload;
      return Object.assign({}, state, {user: {name, email}});
    }
    case ERROR: {
      const {code, message} = action.payload;
      return Object.assign({}, state, {error: {code, message}});
    }
    case RESET_ERROR: {
      return Object.assign({}, state, {error: {code: '', message: ''}});
    }
  }
};

export default reducer;
