import React, { useReducer } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import todos from '../reducers';
import visibilityFilter from '../reducers/visibilityFilter';
import Footer from './Footer';

export const Store = React.createContext();
export const Action = React.createContext();

const App = () => {
  const [stateTodos, dispatchTodos] = useReducer(todos, []);
  const [stateVisibilityFilter, dispatchVisibilityFilter] = useReducer(visibilityFilter, {});

  return (<Store.Provider value={{ stateTodos, stateVisibilityFilter }}>
    <Action.Provider value={{ dispatchTodos, dispatchVisibilityFilter }}>
      <AddTodo />
      {/* <VisibleTodoList />
      <Footer /> */}
    </Action.Provider>
  </Store.Provider >
  )
}

export default App
