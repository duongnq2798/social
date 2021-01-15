import {moderateScale} from '../Tranforms/Scales';

const type = {
  base: 'ProximaNova-Regular',
  bold: 'Proxima Nova Bold',
  extraBold: 'Proxima Nova Bold',
  thin: 'Proxima Nova Thin',
  black: 'Proxima Nova Black',
};

const size = {
  h1: moderateScale(34),
  h2: moderateScale(30),
  h3: moderateScale(24),
  h4: moderateScale(20),
  h5: moderateScale(19),
  h6: moderateScale(18),
  input: moderateScale(17),
  regular: moderateScale(16),
  medium: moderateScale(14),
  small12: moderateScale(12),
  small11: moderateScale(11),
  small: moderateScale(10),
  tiny: moderateScale(8),
  size34: moderateScale(34),
  size32: moderateScale(32),
  size30: moderateScale(30),
  size23: moderateScale(23),
  size22: moderateScale(22),
  size20: moderateScale(20),
  size19: moderateScale(19),
  size18: moderateScale(18),
  size16: moderateScale(16),
  size14: moderateScale(14),
  size12: moderateScale(12),
  size11: moderateScale(11),
  size10: moderateScale(10),
  size9: moderateScale(9),
  size8: moderateScale(8),
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontFamily: type.bold,
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.bold,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  buttonTitle: {
    fontFamily: type.bold,
    fontSize: size.small,
  },
};

export default {
  type,
  size,
  style,
};
