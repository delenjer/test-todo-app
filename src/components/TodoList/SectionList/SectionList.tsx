import { SetStateAction, useState} from 'react';

import { TodoList } from '../TodoList';
import { Filters } from '../../Filters/Filters';

export const SectionList = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setValue(e.target.value);
  }

  return (
    <>
      <Filters
        value={value}
        setValue={setValue}
        handleChange={handleChange}
      />

      <TodoList searchValue={value} />
    </>
  )
};
