import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screen of Stack
import HomeScreen from '../../Containers/HomeScreen';

const StoryStackCreate = createStackNavigator();

const StoryStack = () => {
  return (
    <StoryStackCreate.Navigator initialRouteName="HomeScreen">
      <StoryStackCreate.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </StoryStackCreate.Navigator>
  );
};

export default StoryStack;
