import {characterActions} from './actions/characterActions';
interface userInitialType {
  characters: any;
  count: number;
  total: number;
  offset: number;
  characterDetail: any;
  loader: boolean;
}
const initialState: userInitialType = {
  characters: [],
  count: 0,
  total: 0,
  offset: 0,
  characterDetail: null,
  loader: false,
};

interface characterActionType {
  type: characterActions;
  payload: any;
}
const CharacterReducer = (
  state = initialState,
  action: characterActionType,
) => {
  switch (action.type) {
    case characterActions.ENABLE_LOADER_CHARACTER: {
      return {
        ...state,
        loader: true,
      };
    }
    case characterActions.DISABLE_LOADER_CHARACTER: {
      return {
        ...state,
        loader: false,
      };
    }
    case characterActions.SAVE_CHARACTER_DATA: {
      if (action.payload.offset === 0) {
        return {
          ...state,
          characters: action.payload.results,
          count: action.payload.count ?? state.count,
          total: action.payload.total ?? state.total,
          offset: action.payload.offset ?? state.offset,
        };
      }
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results],
        count: action.payload.count ?? state.count,
        total: action.payload.total ?? state.total,
        offset: action.payload.offset ?? state.offset,
      };
    }
    case characterActions.SAVE_CHARACTER_DETAIL: {
      if (action.payload && action.payload?.length > 0) {
        return {
          ...state,
          characterDetail: {...action.payload[0]},
        };
      } else {
        return state;
      }
    }
    case characterActions.CLEAR_CHARACTER_DETAIL: {
      return {
        ...state,
        characterDetail: null,
      };
    }

    case characterActions.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default CharacterReducer;
