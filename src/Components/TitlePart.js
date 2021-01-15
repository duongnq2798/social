// Import Core
import React from 'react';
import {View, Text} from 'react-native';
// Import Lib
import PropTypes from 'prop-types';
// Import Custom
import styles from './Styles/TitlePartStyle';

const TitlePart = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

TitlePart.propTypes = {
  title: PropTypes.string,
};

export default TitlePart;
