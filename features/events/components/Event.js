import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import { WebView } from 'react-native-webview';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectEvent } from '../selectors';
import { withNavigation } from 'react-navigation';

class Event extends Component {
  render() {
    const { event } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image style={styles.image} source={{ uri: event.image }} />
          <Text style={styles.title}>{event.title}</Text>
        </View>
        <WebView
          source={{
            html: `${event.information_description} <style type="text/css">p { color: #090; font-family: sans-serif; font-size: 30px }</style>`,
          }}
          style={styles.information}
        />
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
