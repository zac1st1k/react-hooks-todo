import React, { useContext } from 'react';
import { addTodo } from '../actions';
import { Action } from '../components/App';

const AddTodo = () => {
  let input
  const action = useContext(Action);

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        action.dispatchTodos(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
