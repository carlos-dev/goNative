import React, {Component} from 'react';
import {Animated, View, StyleSheet} from 'react-native';

export default class Animations extends Component {
  state = {
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.ballY, {
      toValue: 500,
      duration: 500,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: this.state.ballY}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  ball: {
    width: 70,
    height: 70,
    borderRadius: 36,
    backgroundColor: '#a8a',
  },
});
