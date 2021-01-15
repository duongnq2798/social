import {StyleSheet, Dimensions} from 'react-native';
import Scale from '../../Tranforms/Scale';
import Metrics from '../../Themes/Metrics';
import font from '../../Themes/Fonts';
import colors from '../../Themes/Colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: Metrics.flex.flexRow,
    alignItems: Metrics.flex.center,
    paddingVertical: Scale(Metrics.distant.pad5),
    paddingHorizontal: Scale(Metrics.distant.pad10),
  },
  viewImageGroup: {
    width: Scale(40),
    height: Scale(40),
  },
  image: {
    width: Scale(40),
    height: Scale(40),
    backgroundColor: colors.bgImage,
    borderRadius: 100,
  },
  online: {
    position: 'absolute',
    right: 0,
  },
  viewInfoUser: {
    width: width - Scale(Metrics.distant.pad10 * 2) - Scale(40),
    flexDirection: Metrics.flex.flexRow,
    justifyContent: Metrics.flex.spaceBetween,
    alignItems: Metrics.flex.center,
    paddingHorizontal: Scale(10),
    height: Scale(40),
  },
  boudaryLocation: {
    flexDirection: Metrics.flex.flexRow,
    justifyContent: Metrics.flex.spaceBetween,
  },
  userName: {
    fontFamily: font.type.bold,
    fontSize: font.size.h4,
    color: colors.userNamePost,
  },
  locationTime: {
    flexDirection: Metrics.flex.flexRow,
    alignItems: Metrics.flex.center,
  },
  textLocationTime: {
    fontFamily: font.type.thin,
    fontSize: font.size.h6,
  },
  dot: {
    marginHorizontal: Scale(Metrics.distant.margin8),
  },
});

export default styles;
