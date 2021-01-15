import {StyleSheet} from 'react-native';
import Metrics from '../../Themes/Metrics';
import font from '../../Themes/Fonts';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    padding: Metrics.distant.pad10,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: font.type.bold,
    fontSize: font.size.h5,
  },
});

export default styles;
