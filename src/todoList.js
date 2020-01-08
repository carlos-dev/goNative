import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodosActions from './store/actions/todos';

const TodoList = ({todos, addTodo, markAsCompleted}) => (
  <View style={{flex: 1, justifyContent: 'center'}}>
    {todos.map(todo => (
      <Text onPress={() => markAsCompleted(todo.id)} style={{textDecorationLine: todo.completed ? 'line-through': 'none'}} key={todo.id}>{todo.text}</Text>
    ))}

    <Button
      onPress={addTodo}
      title="add"
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
