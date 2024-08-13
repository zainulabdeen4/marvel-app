import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  loaderStyle: {width: '30%', height: '30%'},
});
