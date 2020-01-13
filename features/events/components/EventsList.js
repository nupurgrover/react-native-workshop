import * as FileSystem from 'expo-file-system';

import { FlatList, withNavigation } from 'react-navigation';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { Component } from 'react';
import { selectEvents, selectEventsLoading, selectEventsRefreshing } from '../selectors';

import { connect } from 'react-redux';
import { loadEvents } from '../actions';

const EventsListItem = withNavigation(({ event, navigation }) => (
  <TouchableHighlight onPress={() => navigation.push('Event', { id: event.id })}>
    <View>
      <Image
        style={{ width: 100, height: 50 }}
        source={{
          uri: `${FileSystem.documentDirectory}${event.image.split('/').reverse()[0]}`,
        }}
      />
      <Text>{event.title}</Text>
    </View>
  </TouchableHighlight>
));

class EventsList extends Component {
  render() {
    if (this.props.loading && !this.props.refreshing) {
      return <Text>Loading</Text>;
    }
    return (
      <FlatList
        data={this.props.events}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <EventsListItem event={item} />}
        onRefresh={this.props.loadEvents}
        refreshing={this.props.refreshing}
        style={styles.container}
      >
        <Text>First</Text>
      </FlatList>
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
});
