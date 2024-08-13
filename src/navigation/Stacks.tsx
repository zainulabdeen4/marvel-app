import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import {scale, verticalScale} from '../themes/scaling';
import {Image, Pressable, View} from 'react-native';
import {Logo, logout, theme} from '../assets/Images';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../redux/actions/userActions';
import {useTheme} from '@react-navigation/native';
import CharacterDetails from '../screens/CharacterDetails';
import styles from './styles';

const Stack = createNativeStackNavigator();
interface ThemeBtnType {
  toggleTheme: () => void;
  color: string;
}
const ThemeBtn = ({toggleTheme, color}: ThemeBtnType) => {
  return (
    <Pressable onPress={toggleTheme}>
      <Image
        source={theme}
        style={{
          width: scale(25),
          height: verticalScale(25),
          tintColor: color,
        }}
        resizeMode="contain"
      />
    </Pressable>
  );
};
interface stackType {
  toggleTheme: () => void;
}

const AuthStack = ({toggleTheme}: stackType) => {
  const {colors} = useTheme();
  const renderHeaderRight = () => (
    <ThemeBtn toggleTheme={toggleTheme} color={colors.text} />
  );

  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerRight: renderHeaderRight,
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const MainStack = ({toggleTheme}: stackType) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser());
  };
  const renderLogo = () => (
    <Image
      style={{width: scale(130), height: verticalScale(40)}}
      resizeMode="contain"
      source={Logo}
    />
  );
  const renderHeaderRight = () => {
    const {mainRow, logoutBtnStyle} = styles;
    return (
      <View style={mainRow}>
        <ThemeBtn toggleTheme={toggleTheme} color="#fff" />

        <Pressable onPress={logOut}>
          <Image source={logout} style={logoutBtnStyle} resizeMode="contain" />
        </Pressable>
      </View>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: renderHeaderRight,
        headerTitle: renderLogo,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
    </Stack.Navigator>
  );
};

export {MainStack, AuthStack};
