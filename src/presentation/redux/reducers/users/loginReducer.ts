import { IAction, IState } from '../../../../shared/interface/common';
import {
  IUserLogin, UserActionTypes,

} from '../../actions/users';

import ReducerHelper from '../helper';

const initialState: IState<any> = {
  isFetching: false,
  params: undefined,
  data: {isLogin: false},
  errorMessage: '',
  success: false,
  actionType: '',
  status: 'false',
};

export default function (state = initialState, action: IAction<any>): any {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return ReducerHelper.baseProcessSuccess(state, action);
    case UserActionTypes.LOGIN_FAIL:
      return ReducerHelper.baseProcessFailed(state, action);
    default:
      return state;
  }
}
