import { AddTodo } from '../AddTask/AddTodo';
import { TodoList } from '../TodoList/TodoList';

export const MainSection = () => (
  <div className="main">
    <TodoList />

    <AddTodo />
  </div>
);
