import { AddTodo } from '../AddTask/AddTodo';
import { SectionList } from '../TodoList/SectionList/SectionList';

export const MainSection = () => (
  <div className="main">
    <SectionList />

    <AddTodo />
  </div>
);
