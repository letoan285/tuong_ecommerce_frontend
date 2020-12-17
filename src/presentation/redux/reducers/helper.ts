import {
  IAction,
  IState,
} from '../../../shared/interface/common';

export default class ReducerHelper {
  static DEFAULT_SECTION_KEY = 'default';

  /**
   * For common usage
   * @returns {{isFetching: boolean, params: null, data: null, error: null, success: boolean, actionType: string}}
   */
  static baseReducer = (data?: any): IState<any> => ({
    isFetching: false,
    params: undefined,
    data,
    errorMessage: 'undefined',
    success: false,
    actionType: '',
    status: 'none',
  });

  static baseListReducer = (data?: any): IState<any> => ({
    isFetching: false,
    params: undefined,
    data: data || {
      byId: {},
      ids: [],
    },
    errorMessage: 'undefined',
    success: false,
    actionType: '',
    status: 'none',
  });

  static baseSectionListReducer = (): IState<any> => ({
    isFetching: false,
    params: undefined,
    data: {},
    errorMessage: 'undefined',
    success: false,
    actionType: '',
    status: 'done',
  });

  static baseProcessSuccess = (
    state: IState<any>,
    action: IAction<any>
  ): any => {
    return {
      ...state,
      status: 'done',
      isFetching: true,
      data: action.payload,
      errorMessage: 'undefined',
      success: true,
      actionType: action.type,
    };
  };

  static baseProcessRequest = (
    state: IState<any>,
    action: IAction<any>
  ): any => {
    return {
      ...state,
      status:
        action.params && action.params.refresh
          ? 'fetching'
          : 'fetching',
      isFetching: true,
      params: action.payload,
      errorMessage: 'undefined',
      success: false,
      actionType: action.type,
    };
  };

  static baseProcessFailed = (
    state: IState<any>,
    action: IAction<any>
  ): any => {
    return {
      ...state,
      status: 'done',
      isFetching: false,
      errorMessage: action.error,
      success: false,
      actionType: action.type,
    };
  };

  /**
   * @description
   * @static
   * @param isAppend: data list should be appended or just replace the data
   * @memberof ReducerHelper
   */
  static baseProcessForListSuccess = (
    state: any,
    action: IAction<any>,
    isAppend?: boolean
  ): any => {
    let newData = (Object as any).assign({}, state.data);
    const listData:any = newData || { byId: {}, ids: [] };
    const byId = action.payload ? action.payload.byId : {};
    const ids = action.payload ? action.payload.ids : [];

    if (isAppend) {
      listData.ids = listData.ids.concat(ids);
      listData.byId = {
        ...listData.byId,
        ...byId,
      };
    } else {
      listData.ids = ids;
      listData.byId = byId;
    }

    newData = listData;
    const result: any = {
      ...state,
      status: 'done',
      isFetching: false,
      data: newData,
      errorMessage: undefined,
      success: true,
      actionType: action.type,
      canLoadMore: action.params ? !!action.params.canLoadMore : true,
    };

    return result;
  };

  /**
   * @description
   * @static
   * @param isAppend: data list should be appended or just replace the data
   * @memberof ReducerHelper
   */
  static baseProcessForSectionListSuccess = (
    state: any,
    action: IAction<any>,
    isAppend?: boolean
  ): any => {
    const { params } = action;
    const sectionId =
      params && params.sectionId ? params.sectionId : 'DEFAULT_SECTION_ID';
    const newData = (Object as any).assign({}, state.data);
    const listData: any = newData[sectionId]
      ? newData[sectionId]
      : { byId: {}, ids: [] };
    const byId = action.payload ? action.payload.byId : {};
    const ids = action.payload ? action.payload.ids : [];
    if (isAppend) {
      listData.ids = listData.ids.concat(ids);
      listData.byId = {
        ...listData.byId,
        ...byId,
      };
    } else {
      listData.ids = ids;
      listData.byId = byId;
    }
    newData[sectionId] = listData;
    return {
      ...state,
      status: 'done',
      isFetching: false,
      data: newData,
      errorMessage: undefined,
      success: true,
      actionType: action.type,
      canLoadMore: action.params
        ? {
            ...state.canLoadMore,
            [sectionId]: !!action.params.canLoadMore,
          }
        : { ...state.canLoadMore },
    };
  };
}
