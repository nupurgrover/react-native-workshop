import { SafeAreaView, StyleSheet } from 'react-native';

import EventsList from '../features/events/components/EventsList';
import React from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <EventsList />
    </SafeAreaView>
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
