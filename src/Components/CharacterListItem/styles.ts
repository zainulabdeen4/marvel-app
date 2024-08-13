import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';
import {TextStyles} from '../../themes/typography';

export default (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,

      width: '48%',
      shadowColor: colors.button,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
      borderRadius: scale(10),
      marginBottom: verticalScale(10),
    },
    ImgStyle: {
      width: '100%',
      height: verticalScale(180),
      resizeMode: 'cover',
      borderTopStartRadius: scale(10),
      borderTopEndRadius: scale(10),
    },
    nameStyle: {
      paddingHorizontal: scale(10),
      color: colors.text,
      paddingVertical: verticalScale(10),
      ...TextStyles.heading2,
    },
  });
