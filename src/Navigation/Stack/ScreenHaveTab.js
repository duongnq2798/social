// React, React Native / Navigation
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Stack
import HomeStack from './HomeStack';
import StoryStack from './StoryStack';
import NotificationStack from './NotificationStack';
import SearchStack from './SearchStack';
import CameraStack from './CameraStack';
// Contant
import navigationName from '../../Config/Navigation';
// Icon
import IconHomeScreen from '../../../assets/icon/svg/home.svg';
import IconHomeScreenActive from '../../../assets/icon/svg/homeActive.svg';
import IconStoryScreen from '../../../assets/icon/svg/story.svg';
import IconStoryScreenActive from '../../../assets/icon/svg/storyActive.svg';
import IconNotificationScreen from '../../../assets/icon/svg/notification.svg';
import IconNotificationScreenActive from '../../../assets/icon/svg/notificationActive.svg';
import IconSearchScreen from '../../../assets/icon/svg/search.svg';
import IconSearchScreenActive from '../../../assets/icon/svg/searchActive.svg';
import IconCameraScreen from '../../../assets/icon/svg/Camera.svg';
const Tab = createBottomTabNavigator();

const ScreenHaveTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === navigationName.stack.Home) {
            return focused ? <IconHomeScreenActive /> : <IconHomeScreen />;
          } else if (route.name === navigationName.stack.Story) {
            return focused ? <IconStoryScreenActive /> : <IconStoryScreen />;
          } else if (route.name === navigationName.stack.Notification) {
            return focused ? (
              <IconNotificationScreenActive />
            ) : (
              <IconNotificationScreen />
            );
          } else if (route.name === navigationName.stack.Camera) {
            return <IconCameraScreen />;
          } else if (route.name === navigationName.stack.Search) {
            return focused ? <IconSearchScreenActive /> : <IconSearchScreen />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2676E1',
        labelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
          marginTop: 5,
        },
        style: {
          height: 60,
          paddingVertical: 10,
          paddingBottom: 5,
          paddingHorizontal: 10,
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name={navigationName.stack.Home}
        component={HomeStack}
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            marginTop: -10,
          },
        }}
      />
      <Tab.Screen
        name={navigationName.stack.Story}
        component={StoryStack}
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            marginTop: -10,
          },
        }}
      />
      <Tab.Screen
        name={navigationName.stack.Camera}
        component={CameraStack}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name={navigationName.stack.Notification}
        component={NotificationStack}
        options={{
          tabBarBadge: 10,
          tabBarBadgeStyle: {
            marginTop: -10,
          },
        }}
      />
      <Tab.Screen
        name={navigationName.stack.Search}
        component={SearchStack}
        options={{
          tabBarBadge: 4,
          tabBarBadgeStyle: {
            marginTop: -10,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ScreenHaveTab;
