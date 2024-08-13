import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';
import {TextStyles} from '../../themes/typography';

export default (colors: any, dark: boolean) =>
  StyleSheet.create({
    mainContainer: {
      marginBottom: verticalScale(20),
    },
    container: {
      flexDirection: 'row',
      backgroundColor: colors.textFieldBg,
      width: '100%',
      alignItems: 'center',
      paddingVertical: verticalScale(15),
      paddingHorizontal: scale(10),
      marginBottom: verticalScale(5),
      borderRadius: scale(5),
      ...(!dark && {
        borderWidth: scale(1),
        borderColor: colors.border,
      }),
    },
    fieldStyle: {
      //   width: '100%',
      flex: 1,
      color: colors.text,
      ...TextStyles.fieldText,
      paddingVertical: 0,
    },
    showHideStyle: {
      width: verticalScale(20),
      height: verticalScale(20),
      marginLeft: scale(10),
      resizeMode: 'contain',
      tintColor: colors.text,
    },
    errorStyle: {
      color: colors.button,
      ...TextStyles.body,
    },
  });
