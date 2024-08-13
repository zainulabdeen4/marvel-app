import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

import {empty} from '../../assets/Images';

const EmptyListComponent = () => {
  const {colors} = useTheme();
  const {container, imageStyle, textStyle} = styles(colors);

  return (
    <View style={container}>
      <Image source={empty} style={imageStyle} />
      <Text style={textStyle}>Results Not Found</Text>
    </View>
  );
};

export default EmptyListComponent;
