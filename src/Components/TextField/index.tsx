import {
  Image,
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {EyeOpened, EyedClosed, cancel} from '../../assets/Images';

interface inputProps extends TextInputProps {
  errorText?: String;
  canCancel?: boolean;
  pressCancel?: () => void;
}
export default ({
  placeholder,
  secureTextEntry = false,
  errorText,
  onChangeText,
  canCancel = false,
  value,
  pressCancel,
}: inputProps) => {
  const {colors, dark} = useTheme();
  const {mainContainer, container, fieldStyle, showHideStyle, errorStyle} =
    styles(colors, dark);
  const [secureText, setSecureText] = useState(secureTextEntry);
  return (
    <View style={mainContainer}>
      <View style={container}>
        <TextInput
          placeholder={placeholder}
          style={fieldStyle}
          placeholderTextColor={colors.text}
          secureTextEntry={secureText}
          onChangeText={onChangeText}
          value={value}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setSecureText(state => !state)}>
            <Image
              source={secureText ? EyeOpened : EyedClosed}
              style={showHideStyle}
            />
          </Pressable>
        )}
        {value && value.length > 0 && canCancel && (
          <Pressable onPress={pressCancel}>
            <Image source={cancel} style={showHideStyle} />
          </Pressable>
        )}
      </View>
      {errorText && <Text style={errorStyle}>{errorText}</Text>}
    </View>
  );
};
