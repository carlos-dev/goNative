import {createStore} from 'redux';

const INITAIAL_STORE = ['estudar, dormir'];

function reducer(state = INITAIAL_STORE, action) {
  if (action.type === 'ADD_TODO') {
    return [...state, action.text];
  }
  console.log(action);
  return state;
}

const store = createStore(reducer);

export default store;
