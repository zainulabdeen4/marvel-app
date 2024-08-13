import {userActions} from '../redux/actions/userActions';
interface userInitialType {
  user: any;
}
const initialState: userInitialType = {user: null};

interface userActionType {
  type: userActions;
  payload: any;
}
const loaderReducer = (state = initialState, action: userActionType) => {
  switch (action.type) {
    case userActions.SAVE_AUTH_DATA: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case userActions.LOGOUT: {
      return initialState;
    }

    default:
      return state;
  }
};

export default loaderReducer;
