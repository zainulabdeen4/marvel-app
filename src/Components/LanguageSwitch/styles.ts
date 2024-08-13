import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';

export default (colors: any) =>
  StyleSheet.create({
    container: {
      // height: verticalScale(10),
      backgroundColor: colors.button,
      borderRadius: verticalScale(2),
      padding: scale(10),
      alignSelf: 'flex-start',
      marginHorizontal: scale(10),
    },
    btntext: {
      color: '#fff',
      alignSelf: 'center',
    },
  });
