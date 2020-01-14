# react-native-workshop

## Useful links

[Expo docs](https://docs.expo.io/versions/latest/) including the react-native API, which is pretty much a mirror of the official RN docs, but may have differences due to the bundled package being a fork.

[React Navigation docs](https://reactnavigation.org/docs/en/getting-started.html)

## Your Tasks

Congratulations, you've built an app!  Let's publish it.  

`$ expo publish`

You can now stop your dev server, and in your Expo app you should see your app in the Published Projects.  You can share the link.

You can publish to a release channel with `--release-channel test`.  Release channel names are arbitrary, so you could deploy an app with a release channel called `dev` if you wanted.  Beware that if you use release channels you need to follow the link from inside your device to get Expo to open it correctly as Published Projects opens the default one.

Had you built and deployed the app and haven't upgraded the SDK, publishing like this will generate an [over the air update](https://docs.expo.io/versions/v36.0.0/guides/configuring-ota-updates/)

`$ expo build:[ios|android] [--release-channel production]` will build the app for you.  If you do this for android, you can download the APK and install it on your phone.  

For iOS, we need to upload to TestFlight which is its own special version of certificate, key and profile hell.  There are [docs](https://docs.expo.io/versions/v36.0.0/distribution/uploading-apps/#22-if-you-choose-to-upload-your) and you can use fastlane to upload as part of a deploy script:

```
expo publish --release-channel test --non-interactive
expo build:ios --release-channel test --no-publish
curl -o app.ipa "$(expo url:ipa --non-interactive)"
fastlane pilot upload
```
