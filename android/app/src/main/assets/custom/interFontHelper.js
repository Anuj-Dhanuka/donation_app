import { Platform } from 'react-native';

const fontMapping = {
  18: {
    Black: 'Inter_18pt-Black',
    BlackItalic: 'Inter_18pt-BlackItalic',
    Bold: 'Inter_18pt-Bold',
    BoldItalic: 'Inter_18pt-BoldItalic',
    ExtraBold: 'Inter_18pt-ExtraBold',
    ExtraBoldItalic: 'Inter_18pt-ExtraBoldItalic',
    ExtraLight: 'Inter_18pt-ExtraLight',
    ExtraLightItalic: 'Inter_18pt-ExtraLightItalic',
    Italic: 'Inter_18pt-Italic',
    Light: 'Inter_18pt-Light',
    LightItalic: 'Inter_18pt-LightItalic',
    Medium: 'Inter_18pt-Medium',
    MediumItalic: 'Inter_18pt-MediumItalic',
    Regular: 'Inter_18pt-Regular',
    SemiBold: 'Inter_18pt-SemiBold',
    SemiBoldItalic: 'Inter_18pt-SemiBoldItalic',
    Thin: 'Inter_18pt-Thin',
    ThinItalic: 'Inter_18pt-ThinItalic',
  },
  24: {
    Black: 'Inter_24pt-Black',
    BlackItalic: 'Inter_24pt-BlackItalic',
    Bold: 'Inter_24pt-Bold',
    BoldItalic: 'Inter_24pt-BoldItalic',
    ExtraBold: 'Inter_24pt-ExtraBold',
    ExtraBoldItalic: 'Inter_24pt-ExtraBoldItalic',
    ExtraLight: 'Inter_24pt-ExtraLight',
    ExtraLightItalic: 'Inter_24pt-ExtraLightItalic',
    Italic: 'Inter_24pt-Italic',
    Light: 'Inter_24pt-Light',
    LightItalic: 'Inter_24pt-LightItalic',
    Medium: 'Inter_24pt-Medium',
    MediumItalic: 'Inter_24pt-MediumItalic',
    Regular: 'Inter_24pt-Regular',
    SemiBold: 'Inter_24pt-SemiBold',
    SemiBoldItalic: 'Inter_24pt-SemiBoldItalic',
    Thin: 'Inter_24pt-Thin',
    ThinItalic: 'Inter_24pt-ThinItalic',
  },
  28: {
    Black: 'Inter_28pt-Black',
    BlackItalic: 'Inter_28pt-BlackItalic',
    Bold: 'Inter_28pt-Bold',
    BoldItalic: 'Inter_28pt-BoldItalic',
    ExtraBold: 'Inter_28pt-ExtraBold',
    ExtraBoldItalic: 'Inter_28pt-ExtraBoldItalic',
    ExtraLight: 'Inter_28pt-ExtraLight',
    ExtraLightItalic: 'Inter_28pt-ExtraLightItalic',
    Italic: 'Inter_28pt-Italic',
    Light: 'Inter_28pt-Light',
    LightItalic: 'Inter_28pt-LightItalic',
    Medium: 'Inter_28pt-Medium',
    MediumItalic: 'Inter_28pt-MediumItalic',
    Regular: 'Inter_28pt-Regular',
    SemiBold: 'Inter_28pt-SemiBold',
    SemiBoldItalic: 'Inter_28pt-SemiBoldItalic',
    Thin: 'Inter_28pt-Thin',
    ThinItalic: 'Inter_28pt-ThinItalic',
  },
};

export const getInterFont = (size, weight) => {
  const sizeMap = fontMapping[size] || fontMapping[18]; 
  const fontName = sizeMap[weight] || sizeMap.Regular;

  return {
    fontFamily: Platform.select({
      ios: fontName,
      android: fontName,
      windows: `${fontName}.ttf`, 
      macos: `${fontName}.ttf`,   
    }),
  };
};
