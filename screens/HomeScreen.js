import { StyleSheet, View } from 'react-native';

import EventsList from '../features/events/components/EventsList';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <EventsList />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
