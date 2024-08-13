import {ApiType, api} from '../../Api';
import endpoints from '../../Api/endpoints';
import {showErrorMessage} from '../../Utils';
import {AppDispatch} from '../store';
import loaderActions from './loaderActions';

enum userActions {
  SAVE_AUTH_DATA = 'SAVE_AUTH_DATA',
  LOGOUT = 'LOGOUT',
}
interface loginDataType {
  username: string;
  password: string;
}
function LoginUser(userData: loginDataType) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({type: loaderActions.ENABLE_LOADER});
      const res = await api(endpoints.Login, userData, ApiType.POST);
      dispatch({type: loaderActions.DISABLE_LOADER});
      if (res) {
        dispatch({type: userActions.SAVE_AUTH_DATA, payload: res});
      }
    } catch (e: any) {
      dispatch({type: loaderActions.DISABLE_LOADER});
      showErrorMessage(e.data.message);
    }
  };
}

const logoutUser = () => ({type: userActions.LOGOUT});

export {userActions, LoginUser, logoutUser};
