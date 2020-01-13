# react-native-workshop

## Useful links

[Expo docs](https://docs.expo.io/versions/latest/) including the react-native API, which is pretty much a mirror of the official RN docs, but may have differences due to the bundled package being a fork.

[React Navigation docs](https://reactnavigation.org/docs/en/getting-started.html)

## Your Task

I've created an EventScreen component that renders an Event component.  The Event component uses the withNavigation HOC to provide the navigation prop, and in turn uses its getParam method to get the route's id param to pass to the selector to retrieve the event data from the redux store.

You need to add a Route called Event to the LinksStack, and update the EventsListItem link to navigate to it, passing the event id as a parameter.

Here are the hints:

The LinksStack is defined in MainTabNavigator.  

Try switching between `navigation.navigate()` and `navigation.push()` methods to see some interesting behaviour that demonstrates what Stacks are all about. https://reactnavigation.org/docs/en/navigation-prop.html#navigator-dependent-functions


