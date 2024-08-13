import Config from 'react-native-config';
import {api} from '../../Api';
import endpoints from '../../Api/endpoints';
// import {showErrorMessage} from '../../Utils';
import {AppDispatch} from '../store';
import loaderActions from './loaderActions';
import {createHash} from '../../Utils';

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
      const limit = 20;
      const ts = Date.now();
      const offset = page * limit;
      let url =
        endpoints.characters +
        `?ts=${ts}&apikey=${Config.PUBLIC_API_KEY}&hash=${createHash(
          ts,
        )}&limit=${limit}&offset=${offset}`;
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
      const ts = Date.now();
      let url =
        endpoints.characters +
        `/${characterId}?ts=${ts}&apikey=${
          Config.PUBLIC_API_KEY
        }&hash=${createHash(ts)}`;

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
      // showErrorMessage(e.data.message);
    }
  };
}

export {characterActions, fetchCharacters, fetchCharactersDetails};
