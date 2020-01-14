import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableHighlight, Image, Alert } from 'react-native';
import { selectEvents, selectEventsLoading, selectEventsRefreshing } from '../selectors';

import { connect } from 'react-redux';
import { loadEvents } from '../actions';

class EventsList extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  onEventTouch = date => {
    console.log('item :', date);
    Alert.alert(`Event is on ${date}`);
  };

  render() {
    const { events } = this.props;
    console.log('events :', events);

    return (
      <FlatList
        data={events}
        refreshing={this.props.refreshing}
        onRefresh={this.props.loadEvents}
        renderItem={event => {
          return (
            <TouchableHighlight onPress={() => this.onEventTouch(event.item.date)}>
              <View>
                <Image style={{ width: 50, height: 50 }} source={{ uri: event.item.cover_image }} />
                <Text>{event.item.title}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={event => event.id}
      ></FlatList>
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
