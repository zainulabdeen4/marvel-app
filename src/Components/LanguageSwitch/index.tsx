import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {TextStyles} from '../../themes/typography';
import i18n from '../../translations/i18n';
import {toggleLanguage} from '../../Utils';

const LanguageSwitch = () => {
  const {colors} = useTheme();
  const {container, btntext} = styles(colors);
  console.log(i18n);
  return (
    <TouchableOpacity style={[container]} onPress={toggleLanguage}>
      <Text style={[TextStyles.btnTitle, btntext]}>
        {i18n.resolvedLanguage}
      </Text>
    </TouchableOpacity>
  );
};

export default LanguageSwitch;
