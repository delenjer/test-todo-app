import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import { InitialStateDto, TodosDto } from '../../model/model';
import List from '@mui/material/List';
import { ItemTodo } from './ItemTodo/ItemTodo';
import { Modal } from '../Modal/Modal';
import { removeTodo } from '../../store/feature/todosSlice';

export const TodoList = ({ searchValue }:any) => {
  const [open, setOpen] = useState(false);
  const [ indexTodo, setIndexTod ] = useState('');
  const [filteredList, setFilteredList] = useState<any>([]);

  const {
    todos,
    isDone
  }:Pick<InitialStateDto, 'todos' | 'isDone'> = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const todosFiltered = todos.filter((todo:TodosDto) =>
      todo.text.toLowerCase()
      .startsWith(searchValue.toLowerCase())
    );

    if (!isDone) {
      setFilteredList([...todosFiltered]);
    } else {
      const filteredDone = todosFiltered.filter(todo => todo.completed);

      setFilteredList([...filteredDone]);
    }
  }, [searchValue, todos, isDone]);


  useEffect(() => {
    const done = [...filteredList].filter((item:TodosDto) => item.completed);

    setFilteredList(isDone ? [...done] : [...todos]);
  }, [isDone]);

  const handleModal = (e: { stopPropagation: () => void; }, id: string) => {
    e.stopPropagation();

    setIndexTod(id);
    setOpen(true);
  }

  const handleRemove = () => {
    dispatch(removeTodo(indexTodo));
  }

  return (
    <>
      {
        filteredList.length ? (
          <List sx={{ width: '100%', margin: '0 0 16px 0', }}>
            {
              filteredList.map((todo:TodosDto) => (
                <ItemTodo
                  key={todo.id}
                  id={todo.id}
                  completed={todo.completed}
                  text={todo.text}
                  handleOpenModal={handleModal}
                />
              ))
            }
          </List>
        ) : (
          <p>No Tasks</p>
        )
      }

      <Modal
        open={open}
        setOpen={setOpen}
        handleRemove={handleRemove}
      />
    </>
  )
};
