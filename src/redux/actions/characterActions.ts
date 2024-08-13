import {api} from '../../Api';
import endpoints from '../../Api/endpoints';
// import {showErrorMessage} from '../../Utils';
import {AppDispatch} from '../store';
import loaderActions from './loaderActions';
import {getApiKey} from '../../Utils';

enum characterActions {
  SAVE_CHARACTER_DATA = 'SAVE_CHARACTER_DATA',
  SAVE_CHARACTER_DETAIL = 'SAVE_CHARACTER_DETAIL',
  CLEAR_CHARACTER_DETAIL = 'CLEAR_CHARACTER_DETAIL',
  ENABLE_LOADER_CHARACTER = 'ENABLE_LOADER_CHARACTER',
  DISABLE_LOADER_CHARACTER = 'DISABLE_LOADER_CHARACTER',
  HANDLE_API_ERROR = 'HANDLE_API_ERROR',
  CLEAR_API_ERROR = 'CLEAR_API_ERROR',
  LOGOUT = 'LOGOUT',
}

function fetchCharacters(page: number = 0, search: string | null) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({type: characterActions.CLEAR_API_ERROR});
      dispatch({type: loaderActions.ENABLE_LOADER});
      const limit = 30;
      const offset = page * limit;
      let url =
        endpoints.characters + `${getApiKey()}&limit=${limit}&offset=${offset}`;
      if (search) {
        url += `&nameStartsWith=${search}`;
      }
      const res = await api(url, null);
      dispatch({type: loaderActions.DISABLE_LOADER});

      if (res && res?.data) {
        dispatch({
          type: characterActions.SAVE_CHARACTER_DATA,
          payload: res?.data,
        });
      }
    } catch (e: any) {
      dispatch({type: loaderActions.DISABLE_LOADER});
      dispatch({type: characterActions.HANDLE_API_ERROR, payload: e});
    }
  };
}

function fetchCharactersDetails(characterId: number) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({type: characterActions.CLEAR_API_ERROR});

      let url = endpoints.characters + `/${characterId}${getApiKey()}`;

      dispatch({type: characterActions.ENABLE_LOADER_CHARACTER});
      const res = await api(url, null);
      dispatch({type: characterActions.DISABLE_LOADER_CHARACTER});

      if (res && res?.data && res?.data?.results) {
        dispatch({
          type: characterActions.SAVE_CHARACTER_DETAIL,
          payload: res.data.results,
        });
      }
    } catch (e: any) {
      dispatch({type: characterActions.DISABLE_LOADER_CHARACTER});
      dispatch({type: characterActions.HANDLE_API_ERROR, payload: e});
    }
  };
}

export {characterActions, fetchCharacters, fetchCharactersDetails};
