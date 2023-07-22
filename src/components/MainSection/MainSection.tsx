import { AddTodo } from '../AddTask/AddTodo';
import { TodoList } from '../TodoList/TodoList';
import { Filters } from '../Filters/Filters';

export const MainSection = () => (
  <div className="main">
    <Filters />

    <TodoList />

    <AddTodo />
  </div>
);
