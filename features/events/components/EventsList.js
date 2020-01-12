import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { selectEvents, selectEventsLoading, selectEventsRefreshing } from '../selectors';

import { connect } from 'react-redux';
import { loadEvents } from '../actions';

class EventsList extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    console.log(this.props);
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>First</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>EventsList</Text>
        <Text>Last</Text>
      </ScrollView>
    );
  }
}
export default connect(
  state => ({
    events: selectEvents(state),
    loading: selectEventsLoading(state),
    refreshing: selectEventsRefreshing(state),
  }),
  { loadEvents }
)(EventsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
