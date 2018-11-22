import React, { useContext } from 'react';
import { setVisibilityFilter } from '../actions';
import { Dispatch, State } from '../components/App';
import Link from '../components/Link';

const FilterLink = ({ filter, children }) => {
  const dispatch = useContext(Dispatch);
  const state = useContext(State);

  return <Link
    active={filter === state.visibilityFilter}
    onClick={() => dispatch(setVisibilityFilter(filter))}
  >
    {children}
  </Link>
}

export default FilterLink
