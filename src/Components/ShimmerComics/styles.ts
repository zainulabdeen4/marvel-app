import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';

export default (colors: any) =>
  StyleSheet.create({
    container: {flexDirection: 'row', marginBottom: 10},
    circle: {
      backgroundColor: colors.card,
      height: verticalScale(10),
      width: verticalScale(10),
      borderRadius: verticalScale(5),
      marginRight: scale(10),
    },
  });
