// Core Import
import React from 'react';
import {View} from 'react-native';

// Component Import
import StoryCard from './StoryCard';
import styles from './Styles/StoryCardGroupStyle';
// eslint-disable
const StoryCardGroup = () => {
  return (
    <View style={styles.container}>
      <StoryCard
        userName="Hoa Nguyen"
        imageUri={require('../../assets/icon/drawable-xxhdpi/alp-studio-1.png')}
      />
      <StoryCard
        userName="Duong Nguyen"
        imageUri={require('../../assets/icon/drawable-xxhdpi/carl-heyerdahl-1.png')}
      />
      <StoryCard
        userName="Van Tran"
        imageUri={require('../../assets/icon/drawable-xxhdpi/alex-knight-1.png')}
      />
      <StoryCard
        userName="Dung Nguyen"
        imageUri={require('../../assets/icon/drawable-xxhdpi/carl-heyerdahl-1.png')}
      />
    </View>
  );
};

export default StoryCardGroup;
