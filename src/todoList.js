import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import {connect} from 'react-redux';

const TodoList = ({todos, dispatch}) => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    {todos.map(todo => (
      <Text>{todo}</Text>
    ))}

    <Button
      onPress={() => dispatch({type: 'ADD_TODO', text: 'novo todo'})}
      title="add"
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
