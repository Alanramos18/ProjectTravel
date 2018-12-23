import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground
 } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundContainer}>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
      backgroundColor: black
  }
});