/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import styles from './styles';
import {Logo} from '../../assets/Images';
import {TextStyles} from '../../themes/typography';

import {Button, TextField, LanguageSwitch} from '../../Components';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {LoginUser} from '../../redux/actions/userActions';
import Animated, {FadeIn, FadeInRight, Easing} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
interface errorType {
  email?: string;
  passWord?: string;
}

function Login(): React.JSX.Element {
  const {colors} = useTheme();
  const {container, logoStyle, login, body, mainContainer} = styles(colors);
  const [email, setEmail] = useState('');
  const [passWord, setPassW0rd] = useState('');
  const [Erros, setErrors] = useState<errorType>({});
  const dispatch = useDispatch();
  const {t: translate} = useTranslation();

  const submit = () => {
    setErrors({});
    if (email === '') {
      setErrors(state => ({...state, email: 'Email is required'}));
      return;
    } else if (!emailRegex.test(email)) {
      setErrors(state => ({...state, email: 'Email is not valid'}));

      return;
    } else if (passWord === '') {
      setErrors(state => ({...state, passWord: 'Password is required'}));
      return;
    } else if (passWord.length < 8) {
      setErrors(state => ({
        ...state,
        passWord: 'Password should be greater than 8',
      }));

      return;
    }
    //auth only works with below user therefore hardCoded
    dispatch(
      LoginUser({
        username: 'emilys',
        password: 'emilyspass',
      }),
    );
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={mainContainer}>
      <LanguageSwitch />
      <View style={container}>
        <Animated.Image
          source={Logo}
          style={logoStyle}
          entering={FadeInRight.duration(500).easing(Easing.ease)}
        />
        <Text style={[login, TextStyles.heading1]}>{translate('LogIn')}</Text>
        <Animated.View
          style={body}
          entering={FadeIn.duration(400).easing(Easing.ease)}>
          <TextField
            placeholder={translate('Email')}
            onChangeText={t => setEmail(t)}
            value={email}
            errorText={Erros.email}
          />
          <TextField
            placeholder={translate('Pasword')}
            onChangeText={t => setPassW0rd(t)}
            secureTextEntry
            value={passWord}
            errorText={Erros.passWord}
          />
          <Button title={translate('LogIn')} onPress={submit} />
        </Animated.View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Login;
