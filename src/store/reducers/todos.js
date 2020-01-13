const INITIAL_STATE = [
  {text: 'estudar', id: 1, completed: false},
  {text: 'dormir', id: 2, completed: true},
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Math.random(), text: action.payload.text}];
    case 'MARK_AS_COMPLETED':
      return state.map(todo =>
        todo.id === action.payload.id
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    default:
      return state;
  }
}
