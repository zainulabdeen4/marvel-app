import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DarkTheme, LightTheme} from '../../themes/themes';

import {AuthStack, MainStack} from '../../navigation/Stacks';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import {ErrorModal, LoaderView} from '../../Components';
import {useColorScheme} from 'react-native';

const AppNavigator = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    useColorScheme() === 'dark' ? true : false,
  );

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const user = useSelector((state: RootState) => state.userData.user);
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      {!user ? (
        <AuthStack toggleTheme={toggleTheme} />
      ) : (
        <MainStack toggleTheme={toggleTheme} />
      )}
      <LoaderView />
      <ErrorModal />
    </NavigationContainer>
  );
};

export default AppNavigator;
