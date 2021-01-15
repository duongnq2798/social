import {StyleSheet} from 'react-native';
import Scale from '../../Tranforms/Scale';
import Metrics from '../../Themes/Metrics';
import font from '../../Themes/Fonts';

const styles = StyleSheet.create({
  container: {
    width: Scale(75),
    flexDirection: Metrics.flex.flexColumn,
    alignItems: Metrics.flex.center,
    justifyContent: Metrics.flex.center,
    marginHorizontal: Metrics.distant.margin8,
  },
  linearGradient: {
    width: Scale(65),
    height: Scale(65),
    borderRadius: Scale(50),
    flexDirection: Metrics.flex.flexRow,
    justifyContent: Metrics.flex.center,
    alignItems: Metrics.flex.center,
  },
  image: {
    width: Scale(53),
    height: Scale(53),
    borderRadius: Scale(50),
  },
  userName: {
    width: Scale(65),
    fontFamily: font.type.thin,
    fontSize: font.size.h6,
    marginTop: Metrics.distant.margin5,
  },
});

export default styles;
