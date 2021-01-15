// Import Core
import React from 'react';
import {View, Image, Text} from 'react-native';
// Import Library
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
// Import Custom
import styles from './Styles/StoryCardStyle';

const StoryCard = ({imageUri, userName}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#A3FEC7', '#6EC9F9']}
        style={styles.linearGradient}>
        <Image style={styles.image} source={imageUri} />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.userName}>
        {userName}
      </Text>
    </View>
  );
};

StoryCard.propTypes = {
  imageUri: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userName: PropTypes.string,
};

export default StoryCard;
