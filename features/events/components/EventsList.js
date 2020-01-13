import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { Component } from 'react';
import { selectEvents, selectEventsLoading, selectEventsRefreshing } from '../selectors';

import { FlatList } from 'react-navigation';
import { connect } from 'react-redux';
import { loadEvents } from '../actions';
import { withNavigation } from 'react-navigation';

const EventsListItem = withNavigation(({ event, navigation }) => (
  <TouchableHighlight onPress={() => navigation.navigate('Links')}>
    <View>
      <Image style={{ width: 100, height: 50 }} source={{ uri: event.image }} />
      <Text>{event.title}</Text>
    </View>
  </TouchableHighlight>
));

class EventsList extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    console.log(this.props);
    if (this.props.loading && !this.props.refreshing) {
      return <Text>Loading</Text>;
    }
    return (
      <FlatList
        data={this.props.events}
        keyExtractor={item => item.id}
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
