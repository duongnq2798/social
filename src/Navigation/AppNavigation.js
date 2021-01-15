import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import ScreenHaveTab from './Stack/ScreenHaveTab';
import {createStackNavigator} from '@react-navigation/stack';

LogBox.ignoreAllLogs();

const Root = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen
          name="ScreenHaveTab"
          component={ScreenHaveTab}
          options={{headerShown: false}}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}
