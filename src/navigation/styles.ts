import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../themes/scaling';

export default StyleSheet.create({
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutBtnStyle: {
    width: scale(20),
    height: verticalScale(20),
    tintColor: '#fff',
    marginLeft: scale(10),
  },
});
