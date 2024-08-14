import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import LoaderReducer from './LoaderReducer';
import UserReducer from './UserReducer';
import {thunk} from 'redux-thunk';
import CharacterReducer from './CharacterReducer';
import ErrorReducer from './ErrorReducer';

const state = combineReducers({
  userData: UserReducer,
  loaderData: LoaderReducer,
  characterData: CharacterReducer,
  ErrorReducer: ErrorReducer,
});
export const store = createStore(state, applyMiddleware(thunk));

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof state>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
