import { SafeAreaView, StyleSheet } from 'react-native';

import Event from '../components/Event';
import React from 'react';

export default function EventScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Event />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
