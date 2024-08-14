import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';
import {TextStyles} from '../../themes/typography';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modal: {
    width: '80%',
    padding: scale(20),
    backgroundColor: '#fff',
    borderRadius: scale(20),
    alignItems: 'center',
    minHeight: verticalScale(150),
  },
  messageStyle: {
    marginBottom: verticalScale(15),
    ...TextStyles.body,
    color: '#000',
  },
  buttonContainer: {
    width: '100%',
  },
  warningStyle: {
    width: verticalScale(80),
    height: verticalScale(80),
    resizeMode: 'contain',
    marginBottom: verticalScale(20),
  },
  customBtnStyle: {
    width: '60%',
    alignSelf: 'center',
    paddingVertical: verticalScale(10),
    marginBottom: verticalScale(5),
  },
});
