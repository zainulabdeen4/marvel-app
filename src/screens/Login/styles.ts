import {StyleSheet} from 'react-native';
import {verticalScale} from '../../themes/scaling';

export default (colors: any) =>
  StyleSheet.create({
    mainContainer: {flex: 1},
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: '5%',
    },
    logoStyle: {
      width: '60%',
      resizeMode: 'contain',
      height: verticalScale(100),
      marginTop: verticalScale(100),
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
  });
