import React from 'react';
import {Provider} from 'react-redux';

import './config/ReactotronConfig';

import TodoList from './todoList';
import store from './store';

const todos = ['ler', 'estudar'];

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
