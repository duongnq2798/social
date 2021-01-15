import {StyleSheet} from 'react-native';
import colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics';
import Scale from '../../Tranforms/Scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: Metrics.flex.flexRow,
    justifyContent: Metrics.flex.spaceBetween,
    alignItems: Metrics.flex.center,
    paddingHorizontal: Scale(Metrics.distant.pad15),
    paddingVertical: Scale(Metrics.distant.pad10),
    paddingTop: Scale(Metrics.distant.pad20),
    borderBottomWidth: Scale(0.5),
    borderBottomColor: colors.divive,
  },
  image: {
    width: Scale(35),
    height: Scale(35),
    borderRadius: 50,
  },
});

export default styles;
