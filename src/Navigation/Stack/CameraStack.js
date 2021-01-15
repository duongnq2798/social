import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screen of Stack
import NotificationScreen from '../../Containers/NotificationScreen';

const CameraStackCreate = createStackNavigator();

const CameraStack = () => {
  return (
    <CameraStackCreate.Navigator initialRouteName="NotificationScreen">
      <CameraStackCreate.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </CameraStackCreate.Navigator>
  );
};

export default CameraStack;
