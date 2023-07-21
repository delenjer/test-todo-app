import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { TodosDto } from '../../model/model';
import List from '@mui/material/List';
import {ItemTodo} from './ItemTodo/ItemTodo';

export const TodoList = () => {
  const todos:TodosDto[] = useSelector((state: RootState) => state.todos.todos);

  return (
    <List sx={{ width: '100%' }}>
      {
        todos.map((todo:TodosDto) => (
          <ItemTodo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            text={todo.text}
          />
        ))
      }
    </List>
  )
};
