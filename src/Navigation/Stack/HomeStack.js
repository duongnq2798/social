import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screen of Stack
import HomeScreen from '../../Containers/HomeScreen';

const HomeStackCreate = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackCreate.Navigator initialRouteName="HomeScreen">
      <HomeStackCreate.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </HomeStackCreate.Navigator>
  );
};

export default HomeStack;
