import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {TextStyles} from '../../themes/typography';
import {warning} from '../../assets/Images';
import Button from '../Button';
import {useDispatch} from 'react-redux';
import {userActions} from '../../redux/actions/userActions';

interface ApiErrorType {
  errorMessage: string;
  showLogout: boolean;
  showRetry: boolean;
  retry: () => void;
}
const ApiError = ({
  errorMessage = '',
  showLogout,
  showRetry = false,
  retry,
}: ApiErrorType) => {
  const {colors} = useTheme();
  const {container, iconStyle, textColor, customContainerStyle} =
    styles(colors);
  const dispatch = useDispatch();
  return (
    <View style={container}>
      <Image source={warning} style={iconStyle} />
      <Text style={[TextStyles.heading1, textColor]}>{errorMessage}</Text>
      {showRetry && (
        <Button
          title="Retry"
          customContainer={customContainerStyle}
          onPress={retry}
        />
      )}

      {showLogout && (
        <Button
          title="Logout"
          customContainer={customContainerStyle}
          onPress={() => dispatch({type: userActions.LOGOUT})}
        />
      )}
    </View>
  );
};

export default ApiError;
