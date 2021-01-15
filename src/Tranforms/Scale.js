import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const designWidth = 360;
function Scale(unit) {
  return (width * unit) / designWidth;
}

export default Scale;
