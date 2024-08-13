import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';

export default (colors: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.background,
      flex: 1,
      alignItems: 'center',
    },
    logoStyle: {
      width: '60%',
      resizeMode: 'contain',
      height: verticalScale(100),
      marginTop: verticalScale(60),
    },
    login: {
      color: colors.text,
      marginVertical: verticalScale(20),
    },
    body: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
    },
    contentContainerStyle: {
      width: '100%',
      paddingHorizontal: scale(5),
      paddingVertical: verticalScale(10),
    },
    columnWrapperStyle: {justifyContent: 'space-between'},
    listStyle: {width: '100%'},
  });
