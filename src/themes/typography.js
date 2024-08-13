import {StyleSheet} from 'react-native';
import Fonts from './fonts';
import {scale} from './scaling';
export const TextStyles = StyleSheet.create({
  heading1: {
    fontFamily: Fonts.Bold,
    fontSize: scale(30),
  },
  heading2: {
    fontFamily: Fonts.Italic,
    fontSize: scale(18),
  },
  heading3: {
    fontFamily: Fonts.Bold,
    fontSize: scale(12),
  },
  body: {
    fontFamily: Fonts.Regular,
    fontSize: scale(16),
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: scale(14),
  },
  fieldText: {
    fontFamily: Fonts.Regular,
    fontSize: scale(16),
  },
  btnTitle: {
    fontFamily: Fonts.Bold,
    fontSize: scale(20),
  },
});
