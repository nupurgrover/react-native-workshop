# react-native-workshop

## Useful links

[Expo docs](https://docs.expo.io/versions/latest/) including the react-native API, which is pretty much a mirror of the official RN docs, but may have differences due to the bundled package being a fork.

[React Navigation docs](https://reactnavigation.org/docs/en/getting-started.html)

## Your Task

Now we have an event screen, let's put some content in it.

- Make the event title look more like a title
- Add the event's image
- Render the description

For a bonus, we'll talk about how to set the title of the event screen to be the event's title.

Here are the hints:

Supported style props are included in the [Text docs](https://docs.expo.io/versions/v36.0.0/react-native/text/#style)

Use something like `style={{ flex: 1, height: 200 }}` for the image

The description is HTML, so one of the easiest ways to render it is with [WebView](https://docs.expo.io/versions/v36.0.0/sdk/webview/) which accepts a string.  If you want to style it, include a `<style />` block in the code.  Consider that WebViews are like iframes, so setting a height based on the content is no fun; just use a fixed height for now.

IMPORTANT: you'll need to install `react-native-webview`, but here the supported expo code has diverged from master, but expo will help us out: `expo install react-native-webview`.


For the event screen's title, we can use [RouteConfig](https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs), but setting it at runtime is much more difficult.
