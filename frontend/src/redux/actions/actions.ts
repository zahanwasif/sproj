import {ADD_CODE, SIGN_IN, SIGN_OUT, ERROR} from './actionTypes';
import signout from '../../firebase/signout';
import getUser from '../../firebase/getUser';

import {UserInfo, Error} from '../types';

interface UserSignInAction {
  type: string;
  payload: UserInfo;
}

interface UserSignOutAction {
  type: string;
}

interface ChangeCode {
  type: string;
  payload: {
    code: string;
  };
}
interface errorAction {
  type: string;
  payload: Error;
}

const addCodeAction = (code: string): ChangeCode => {
  return {
    type: ADD_CODE,
    payload: {
      code,
    },
  };
};
const signInAction = (name: string, email: string): UserSignInAction => {
  return {
    type: SIGN_IN,
    payload: {
      name,
      email,
    },
  };
};

const errorAction = (code: string, message: string): errorAction => {
  return {
    type: ERROR,
    payload: {
      code,
      message,
    },
  };
};

const signOutAction = (): UserSignOutAction => {
  return {
    type: SIGN_OUT,
  };
};

export const signInWithDispatch = () => {
  return async (dispatch: any) => {
    try {
      const user = (await getUser()) as UserInfo;
      return dispatch(signInAction(user?.name, user?.email));
    } catch (err) {
      return dispatch(errorAction(err.code, err.message));
    }
  };
};

export const signOutWithDispatch = () => {
  return async (dispatch: any) => {
    try {
      const response = await signout();
      return dispatch(signOutAction());
    } catch (err) {
      return dispatch(errorAction(err.code, err.message));
    }
  };
};
