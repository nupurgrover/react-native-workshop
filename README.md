# react-native-workshop

## Welcome, we're going to build an app. It won't be pretty!

Expo is like create-react-app for react-native.  It provides a managed workflow but has [limitations](https://docs.expo.io/versions/v36.0.0/introduction/why-not-expo/).  It does, however, provide a dev environment, a load of helpful APIs, a build service, over the air updates, push notifications.  You can eject and uneject.  Some limitations include no access to things like Apple/Google Pay, RFID etc.  If you're new to native mobile development, there's more than enough to learn without ejecting yet.

## Some quick points

Try consider the separation between `React` and `React-DOM`.  All of React is still here, but instead of DOM the browser (window) API, you have the RN API, and Expo API which abstracts differences in the underlying iOS and Android SDK.  So, many libraries you already use are probably compatible, unless they interact with the DOM.

I've tried to bootstrap the non-native work so we can focus on things you haven't done before.

The sample code is opinionated; it's the quickest way I know to get something functional with the minimal code.  I'll explain how it works as we go along in case it's unfamiliar.

- This ecosystem is massive and evolves quickly.
- Building an app is not a small undertaking.
- Switching context between web and native is hard.
- Beware of shortcuts, like rendering HTML in WebViews.

Good luck!
