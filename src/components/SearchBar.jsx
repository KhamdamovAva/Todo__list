import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/TodoSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input className='wrapper__content-search'
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
