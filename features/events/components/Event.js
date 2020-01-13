import * as FileSystem from 'expo-file-system';
import * as WebBrowser from 'expo-web-browser';

import { Button, Image, ScrollView, StyleSheet, Text, Vibration, View } from 'react-native';
import React, { Component } from 'react';

import { WebView } from 'react-native-webview';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectEvent } from '../selectors';
import { withNavigation } from 'react-navigation';

class Event extends Component {
  state = {
    result: null,
  };
  goToCheckoutAsync = async () => {
    const { event } = this.props;
    const checkoutUrl = `https://checkout.ticketarena.co.uk${event.url.split('co.uk')[1]}`;
    let result = await WebBrowser.openBrowserAsync(checkoutUrl);
    this.setState({ result });
  };
  render() {
    const { event } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `${FileSystem.documentDirectory}${event.image.split('/').reverse()[0]}`,
            }}
          />
          <Text style={styles.title}>{event.title}</Text>
        </View>
        <WebView
          source={{
            html: `${event.information_description} <style type="text/css">p { color: #090; font-family: sans-serif; font-size: 30px }</style>`,
          }}
          style={styles.information}
        />
        <Button title="Vibrate" onPress={() => Vibration.vibrate(500)} />
        <Button title="Go to checkout" onPress={this.goToCheckoutAsync} />
      </ScrollView>
    );
  }
}
export default compose(
  withNavigation,
  connect((state, props) => ({ event: selectEvent(state, props.navigation.getParam('id')) }))
)(Event);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f60',
  },
  image: {
    flex: 1,
    height: 200,
  },
  information: {
    height: 300,
  },
});
