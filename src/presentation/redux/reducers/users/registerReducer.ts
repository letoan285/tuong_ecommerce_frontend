import { IAction, IState } from '../../../../shared/interface/common';
import {
  IUserLogin, UserActionTypes,

} from '../../actions/users';

import ReducerHelper from '../../reducers/helper';

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
    case UserActionTypes.REGISTER_SUCCESS:
      return ReducerHelper.baseProcessSuccess(state, action);
    case UserActionTypes.REGISTER_FAIL:
      return ReducerHelper.baseProcessFailed(state, action);
    default:
      return state;
  }
}
