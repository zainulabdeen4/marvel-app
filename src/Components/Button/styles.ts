import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';

export default (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.button,
      width: '100%',
      paddingVertical: verticalScale(20),
      paddingHorizontal: scale(10),
      marginBottom: verticalScale(20),
      borderRadius: scale(30),
      alignItems: 'center',
      marginTop: verticalScale(10),
    },
    btntext: {
      color: '#fff',
    },
  });
