# react-native-workshop

## Useful links

[Expo docs](https://docs.expo.io/versions/latest/) including the react-native API, which is pretty much a mirror of the official RN docs, but may have differences due to the bundled package being a fork.

[React Navigation docs](https://reactnavigation.org/docs/en/getting-started.html)

## Caching Demo

Quick and dirty demo of caching images using [expo-file-system](https://docs.expo.io/versions/v36.0.0/sdk/filesystem)

## Notes

- Obviously I wouldn't really recommend loading 40 images up front.
- With more sophistication, you can check whether you've already downloaded the image before and not wait for it again.
- [AsyncStorage](https://docs.expo.io/versions/v36.0.0/react-native/asyncstorage/) is like localStorage in that it saves text, or serializable json, and can be used to cache api responses across app sessions.
- These methods are not only useful for performance, but for usage when the app is offline with no internet connection too.
