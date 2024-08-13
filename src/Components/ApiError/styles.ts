import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';

export default (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: scale(10),
    },
    iconStyle: {
      width: scale(150),
      height: verticalScale(150),
      resizeMode: 'contain',
      marginBottom: verticalScale(10),
    },
    textColor: {
      color: colors.text,
      marginBottom: verticalScale(30),
    },
    customContainerStyle: {
      width: '40%',
      paddingVertical: verticalScale(10),
    },
  });
