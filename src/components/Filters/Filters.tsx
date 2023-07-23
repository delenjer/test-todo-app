import React, { useState, useCallback } from 'react';

import { DoneButton } from '../ButtonComponents/DoneButton/DoneButton';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearch, getAllTodos, getDoneTodos } from '../../store/feature/todosSlice';
import { AllButton } from '../ButtonComponents/AllButton/AllButton';
import { StyledOutlinedInput } from '../Search/Search';
import { ChangeEvent } from 'react';
import { IconDone } from '../icons';
import { RootState } from '../../store/store';
import { InitialStateDto } from '../../model/model';

export const Filters = () => {
  const [ value, setValue ] = useState('');

  const {
    isDone,
    isAll,
  }:Pick<InitialStateDto, 'isAll' | 'isDone'> = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(filterBySearch(e.target.value));
    setValue(e.target.value);
  }, [dispatch]);

  return (
    <div className="filter-container">
      <StyledOutlinedInput
        value={value}
        placeholder="Search by text..."
        onChange={e => handleChange(e)}
      />


      <div className="actions-container">
        <AllButton
          type="button"
          onClick={() => {
            dispatch(getAllTodos())
            setValue('')
          }}
          className={isAll ? 'is-all' : ''}
        >
          All
        </AllButton>

        <DoneButton
          type="button"
          onClick={() => dispatch(getDoneTodos())}
          className={isDone ? 'is-done' : ''}
        >
                <span className="icon-btn">
                  <IconDone />
                </span>

          Done
        </DoneButton>
      </div>
    </div>
  )
};
