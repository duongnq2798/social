import {StyleSheet} from 'react-native';
import Metrics from '../../Themes/Metrics';
import colors from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: Metrics.flex.flexRow,
    paddingVertical: Metrics.distant.pad5,
  },
});

export default styles;
