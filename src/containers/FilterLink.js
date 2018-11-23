import React, { useContext } from 'react';
import { setVisibilityFilter } from '../actions';
import { Store } from '../components/App';
import Link from '../components/Link';

const FilterLink = ({ filter, children }) => {
  const { state, dispatch } = useContext(Store);

  return <Link
    active={filter === state.visibilityFilter}
    onClick={() => dispatch(setVisibilityFilter(filter))}
  >
    {children}
  </Link>
}

export default FilterLink
