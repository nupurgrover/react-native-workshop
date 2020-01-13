import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import EventScreen from '../features/events/screens/EventScreen';
import MainTabNavigator from './MainTabNavigator';
import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MainStackNavigator = createStackNavigator(
  {
    Home: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        header: () => null,
      }),
    },
    Event: {
      screen: EventScreen,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: '#FFF',
      }),
    },
  },
  config
);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainStackNavigator,
  })
);
