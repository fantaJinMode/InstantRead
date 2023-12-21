import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../../global/colors.model';

function WelcomeText() {
  return (
    <View>
      <Text style={styles.userText}>Welcome back, Sonu!</Text>
      <Text style={styles.headerText}>What do you want to read today?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    width: '80%',
    color: Colors.HeaderText,
    fontSize: 26,
    fontWeight: '500',
  },
  userText: {
    color: Colors.RegularText,
    fontWeight: '500',
    marginBottom: 5.5,
  },
});

export default WelcomeText;
