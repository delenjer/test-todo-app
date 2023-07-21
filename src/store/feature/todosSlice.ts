import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodosDto } from '../../model/model';

interface InitialStateDto {
  todos: TodosDto[],
  checkedTodo: string[]
}

const initialState:InitialStateDto = {
  todos: [],
  checkedTodo: []
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<TodosDto>) => {
      state.todos.push(action.payload);
    },
    getChecked: (state, action: PayloadAction<string>) => {
      const isChecked = state.checkedTodo.some(item => item === action.payload);

      if (isChecked) {
        state.checkedTodo = state.checkedTodo.filter(item => item !== action.payload)
      } else {
        state.checkedTodo.push(action.payload);
      }

      state.todos.map(todo => {
        const isCompleted = state.checkedTodo.includes(todo.id);

        return isCompleted ? todo.completed = true : todo.completed = false;
      });

      state.todos = state.todos.sort((a, _b) => a.completed ? 1 : -1);
    },
  },
});

export const { getTodos, getChecked } = todosSlice.actions

export default todosSlice.reducer
