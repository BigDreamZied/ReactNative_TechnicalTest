import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

export const actualScreenHeight = Dimensions.get('window').height;

export const statusBarHeight = 40;
export const androidStatusBarHeight = Platform.OS == 'android'
  ? StatusBar.currentHeight || 0
  : 0;
export const fullScreenHeight = actualScreenHeight + androidStatusBarHeight;

export const screenHeight: number = actualScreenHeight - statusBarHeight;
export const screenWidth: number = Dimensions.get('window').width;

export const fontValue = (
  fontSize: number,
  standardScreenHeight: number = 814,
): number => {
  const heightPercent = (fontSize * screenHeight) / standardScreenHeight;
  return PixelRatio.roundToNearestPixel(heightPercent);
};
export const widthPercentageToDP = (widthPercent: number): number => {
  // Convert string input to decimal number
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

export const heightPercentageToDP = (heightPercent: number): number => {
  // Convert string input to decimal number
  return (
    PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100) || 0
  );
};

export const vw = screenWidth / 100;
export const vh = screenHeight / 100;