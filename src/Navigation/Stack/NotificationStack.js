import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screen of Stack
import HomeScreen from '../../Containers/HomeScreen';

const NotificationStackCreate = createStackNavigator();

const NotificationStack = () => {
  return (
    <NotificationStackCreate.Navigator initialRouteName="HomeScreen">
      <NotificationStackCreate.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </NotificationStackCreate.Navigator>
  );
};

export default NotificationStack;
