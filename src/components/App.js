import React, { useReducer } from 'react';
import { VisibilityFilters } from '../actions';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import reducers from '../reducers';
import Footer from './Footer';

export const State = React.createContext();
export const Dispatch = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducers, { todos: [], visibilityFilter: VisibilityFilters.SHOW_ALL });

  return (<State.Provider value={state}>
    <Dispatch.Provider value={dispatch}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </Dispatch.Provider>
  </State.Provider >
  )
}

export default App
