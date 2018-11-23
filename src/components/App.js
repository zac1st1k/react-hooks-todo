import React, { useReducer } from 'react';
import { VisibilityFilters } from '../actions';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import reducers from '../reducers';
import Footer from './Footer';

export const Store = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducers, { todos: [], visibilityFilter: VisibilityFilters.SHOW_ALL });

  return (<Store.Provider value={{ state, dispatch }}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Store.Provider >
  )
}

export default App
