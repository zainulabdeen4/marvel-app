import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const ShimmerComics = () => {
  const {colors, dark} = useTheme();
  const {container, circle} = styles(colors);
  const shimmerColors = dark ? ['#d50010', '#e14c57'] : ['#3b3b3b', '#636363'];

  return (
    <View style={container}>
      <ShimmerPlaceHolder shimmerColors={shimmerColors} style={circle} />
      <ShimmerPlaceHolder shimmerColors={shimmerColors} />
    </View>
  );
};

export default ShimmerComics;
