import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import LottieView from 'lottie-react-native';

const LoaderView = () => {
  const {container, loaderStyle} = styles;
  const loading = useSelector((state: RootState) => state.loaderData.loader);
  return loading ? (
    <View style={container}>
      <LottieView
        source={require('../../assets/animations/loader.json')}
        style={loaderStyle}
        autoPlay
        loop
      />
    </View>
  ) : null;
};

export default LoaderView;
