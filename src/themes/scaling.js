import {Dimensions, PixelRatio} from 'react-native';

export const {width, height} = Dimensions.get('window');

export const guidelineBaseWidth = 414;
export const guidelineBaseHeight = 896;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

export const scale = size => widthRatio * size;
export const verticalScale = size => heightRatio * size;

const defaultModerateFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const moderateScale = (size, factor = defaultModerateFactor) =>
  size + (scale(size) - size) * factor;

function wp(percentage) {
  const value = (percentage * width) / 100;
  return Math.round(value);
}

export const getPixelRatio = () => {
  switch (PixelRatio.get()) {
    case 1:
    case 1.5:
      return '1x';

    case 2:
      return '2x';

    default:
      return '3x';
  }
};
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const carouselsliderWidth = wp(90);

export const sliderWidth = width;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
export const carouselItemWidth = carouselsliderWidth + itemHorizontalMargin * 2;
