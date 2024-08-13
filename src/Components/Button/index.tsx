import {
  ButtonProps,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {TextStyles} from '../../themes/typography';
interface buttonPopType extends ButtonProps {
  customContainer?: StyleProp<ViewStyle>;
}
const Button = ({title, onPress, customContainer}: buttonPopType) => {
  const {colors} = useTheme();
  const {container, btntext} = styles(colors);

  return (
    <TouchableOpacity style={[container, customContainer]} onPress={onPress}>
      <Text style={[TextStyles.btnTitle, btntext]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
