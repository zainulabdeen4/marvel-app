import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {pathReplace} from '../../Utils';
import Animated, {FlipInYLeft, Easing} from 'react-native-reanimated';

interface CharacterthumnailType {
  path: string;
  extension: string;
}
interface CharacterType {
  id: number;
  name: string;
  thumbnail: CharacterthumnailType;
}
interface CharacterItemPropType {
  item: CharacterType;
  onPress: () => void;
}
const CharacterListItem = ({item, onPress}: CharacterItemPropType) => {
  const {colors} = useTheme();
  const {container, ImgStyle, nameStyle} = styles(colors);

  return (
    <Animated.View
      style={container}
      entering={FlipInYLeft.duration(400).easing(Easing.ease)}>
      <TouchableOpacity onPress={onPress}>
        <Animated.Image
          source={{
            uri: `${pathReplace(item?.thumbnail?.path)}.${
              item?.thumbnail?.extension
            }`,
          }}
          style={ImgStyle}
          sharedTransitionTag={`${item.id}Image`}
        />
        <Text style={nameStyle}>{item.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CharacterListItem;
