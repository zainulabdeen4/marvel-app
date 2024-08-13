import {StyleSheet} from 'react-native';
import {verticalScale} from '../../themes/scaling';
import {TextStyles} from '../../themes/typography';

export default (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      marginTop: verticalScale(100),
    },
    imageStyle: {
      height: verticalScale(300),
      resizeMode: 'contain',
    },
    textStyle: {
      color: colors.text,
      ...TextStyles.heading2,
      textAlign: 'center',
      marginTop: verticalScale(20),
    },
  });
