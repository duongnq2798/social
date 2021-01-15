import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screen of Stack
import HomeScreen from '../../Containers/HomeScreen';

const SearchStackCreate = createStackNavigator();

const SearchStack = () => {
  return (
    <SearchStackCreate.Navigator initialRouteName="HomeScreen">
      <SearchStackCreate.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </SearchStackCreate.Navigator>
  );
};

export default SearchStack;
