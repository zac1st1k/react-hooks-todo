import React, { useContext } from 'react';
import { toggleTodo, VisibilityFilters } from '../actions';
import { Dispatch, State } from '../components/App';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const VisibleTodoList = () => {
  const dispatch = useContext(Dispatch);
  const state = useContext(State);

  return <TodoList
    todos={getVisibleTodos(state.todos, state.visibilityFilter)}
    toggleTodo={id => dispatch(toggleTodo(id))}
  />
}

export default VisibleTodoList
