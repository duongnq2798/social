// Core Import
import React from 'react';
import {View} from 'react-native';
// Component Import
import Header from '../Components/Header';
import TitlePart from '../Components/TitlePart';
import StoryCardGroup from '../Components/StoryCardGroup';
import ShadowSeparator from '../Components/ShadowSeparator';
import UserPostCard from '../Components/UserPostCard';
// Style Import
import styles from './Styles/HomeScreenStyle';
import Video from 'react-native-video';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TitlePart title="Recommendations" />
      <StoryCardGroup />
      <ShadowSeparator />
      <UserPostCard
        userName="Nguyễn Quốc Dương"
        locationname="Toronto, Ontario"
        timeUploadPost="10mins ago"
        onlineOrOffline={true}
      />
      <Video source={{uri: 'https://youtu.be/f1l9uzt_AVs'}} />
    </View>
  );
};

export default HomeScreen;
