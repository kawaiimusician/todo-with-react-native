import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1 takes up all the available space on the screen
    // flex: 1,
    // whichever direction is specified is the main axis of the box. for row, the horizontal axis is the main axis.
    flexDirection: 'row',
    // justify content affects the items along the main axis
    justifyContent: 'space-around',
    // align items affects items along the secondary axis
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'gold',
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 3,
    backgroundColor: 'skyblue',
    padding: 40,
  },
})