# react-native-workshop

## Useful links

[Expo docs](https://docs.expo.io/versions/latest/) including the react-native API, which is pretty much a mirror of the official RN docs, but may have differences due to the bundled package being a fork.

[React Navigation docs](https://reactnavigation.org/docs/en/getting-started.html)

## Your Task

I've added a splash screen, as defined in app.json.  Once it clears, you then have to wait for the events to load.  However, App.js uses [AppLoading](https://docs.expo.io/versions/v36.0.0/sdk/app-loading/) which can keep the splash screen visible until we're ready, so...

- we're going to move the call to dispatch the loadEvents action from EventsList's componentDidMount to App.js so the app is ready to display its content when the splash screen disappears
