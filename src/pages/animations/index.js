import React, {Component} from 'react';
import {Animated, View, StyleSheet} from 'react-native';

export default class Animations extends Component {
  state = {
    ballY: new Animated.Value(0),
    ballX: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.ballY, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballX, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballY, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(this.state.ballX, {
          toValue: 0,
          duration: 500,
        }),
      ]),
      {
        iterations: 4,
      },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.ball, {top: this.state.ballY, left: this.state.ballX}]}
        />
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
