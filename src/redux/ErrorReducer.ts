import {handleApiError} from '../Utils';

interface errorInitialType {
  errorData: any;
  errorMessage: string;
  visible: boolean;
  retryAction?: () => void;
}
const initialState: errorInitialType = {
  errorData: null,
  errorMessage: '',
  visible: false,
  retryAction: undefined,
};
interface ErrorActionPayloadType {
  errorData: any;
  retryAction?: () => void;
}
export interface ErrorActionType {
  type: errorActions;
  payload: ErrorActionPayloadType;
}

export enum errorActions {
  SHOW_ERROR = 'SHOW_ERROR',
  HIDE_ERROR = 'HIDE_ERROR',
}
const ErrorReducer = (state = initialState, action: ErrorActionType) => {
  switch (action.type) {
    case errorActions.SHOW_ERROR: {
      return {
        ...state,
        errorData: action.payload.errorData,
        errorMessage: handleApiError(action.payload.errorData),
        retryAction: action.payload.retryAction,
        visible: true,
      };
    }
    case errorActions.HIDE_ERROR: {
      return {
        ...state,
        errorData: null,
        errorMessage: '',
        visible: false,
        retryAction: undefined,
      };
    }

    default:
      return state;
  }
};

export default ErrorReducer;
