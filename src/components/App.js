import React, { useReducer } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import * as reducers from '../reducers';
import Footer from './Footer';

export const State = React.createContext();
export const Dispatch = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducers, {});

  return (<State.Provider value={{ state }}>
    <Dispatch.Provider value={{ dispatch }}>
      <AddTodo />
      {/* <VisibleTodoList />
      <Footer /> */}
    </Dispatch.Provider>
  </State.Provider >
  )
}

export default App
