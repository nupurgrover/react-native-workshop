# react-native-workshop

## Useful links

[Expo docs](https://docs.expo.io/versions/latest/) including the react-native API, which is pretty much a mirror of the official RN docs, but may have differences due to the bundled package being a fork.

[React Navigation docs](https://reactnavigation.org/docs/en/getting-started.html)

## Your Task

Render a list of events with an image and event name title from the available props.

When complete:
- a loading state should be displayed if no events have loaded
- the user should be able to pull to refresh to update the event list.  The loaded events should remain visible.
- the user should be able to press on each event to get an alert with the event date

Here are the hints:

[FlatList](https://docs.expo.io/versions/v36.0.0/react-native/flatlist/) is a good choice to render the items, for reasons summarised in the [ScrollView](https://docs.expo.io/versions/v36.0.0/react-native/scrollview/) documentation

[View](https://docs.expo.io/versions/v36.0.0/react-native/view/) is the equivalent of a `div` or `span`.  Many elements need to be wrapped in one to work

[Image](https://docs.expo.io/versions/v36.0.0/react-native/image/) is self-explanatory

[Text](https://docs.expo.io/versions/v36.0.0/react-native/text/) is a wrapper for text

[TouchableHighlight](https://docs.expo.io/versions/v36.0.0/react-native/touchablehighlight/) can be used to provide an onPress handler around a group of components

[Alert](https://docs.expo.io/versions/v36.0.0/react-native/alert/) is an API you can use to show the event date in response to the onPress

In this case, Text has an onPress prop, but Image doesn't, so let's wrap them both and delegate the functionality to TouchableHighlight.

FlatList will replace ScrollView, and we'll use FlatList's `onRefresh` and `refreshing` props to provide `Pull to Refresh` functionality.



