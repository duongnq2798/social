import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles/ShadowSeparatorStyle';
const ShadowSeparator = () => {
  return (
    <LinearGradient colors={['#C0C0C0', '#D4D4D4']} style={styles.container} />
  );
};

export default ShadowSeparator;
