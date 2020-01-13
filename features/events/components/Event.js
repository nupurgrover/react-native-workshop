import { Alert, FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectEvent } from '../selectors';
import { withNavigation } from 'react-navigation';

const Event = ({ navigation, event }) => {
  console.log(navigation.getParam('id'));
  return (
    <View>
      <Text>{event.title}</Text>
    </View>
  );
};
export default compose(
  withNavigation,
  connect((state, props) => ({ event: selectEvent(state, props.navigation.getParam('id')) }))
)(Event);
