/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './src/translations/i18n';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppNavigator from './src/screens/AppNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
