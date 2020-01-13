import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Event from '../components/Event';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectEvent } from '../selectors';
import { withNavigation } from 'react-navigation';

class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });
  componentDidMount() {
    this.updateTitle();
  }

  componentDidUpdate() {
    this.updateTitle();
  }

  updateTitle() {
    if (this.props.navigation.getParam('title') !== this.props.event.title) {
      this.props.navigation.setParams({ title: this.props.event.title });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Event />
      </View>
    );
  }
}

export default compose(
  withNavigation,
  connect((state, props) => ({ event: selectEvent(state, props.navigation.getParam('id')) }))
)(EventScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
