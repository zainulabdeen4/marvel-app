import loaderActions from '../redux/actions/loaderActions';

interface loaderInitialType {
  loader: boolean;
}
const initialState: loaderInitialType = {loader: false};
interface loaderAction {
  type: loaderActions;
  payload?: any;
}
const loaderReducer = (
  state: loaderInitialType = initialState,
  action: loaderAction,
): loaderInitialType => {
  switch (action.type) {
    case loaderActions.ENABLE_LOADER: {
      return {
        ...state,
        loader: true,
      };
    }

    case loaderActions.DISABLE_LOADER: {
      return {
        ...state,
        loader: false,
      };
    }

    default:
      return state;
  }
};

export default loaderReducer;
