import React from 'react';
import {StyleSheet, View} from 'react-native';

import WelcomeText from './welcomeText';
import Colors from '../../global/colors.model';

function Dashboard() {
  return (
    <View style={styles.container}>
      <WelcomeText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    fontSize: 16,
    padding: 22,
  },
});

export default Dashboard;
