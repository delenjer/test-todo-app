import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { InitialStateDto, TodosDto } from '../../model/model';

const initialState:InitialStateDto = {
  todos: [],
  allTodos: [],
  checkedTodo: [],
  isDone: false,
  isAll: true,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state, action: PayloadAction<TodosDto>) => {
      if (state.isDone) {
        return;
      }

      state.todos.push(action.payload);
      state.allTodos.push(action.payload);
    },
    getChecked: (state, action: PayloadAction<string>) => {
      const isChecked = state.checkedTodo.some(item => item === action.payload);

      if (isChecked) {
        state.checkedTodo = state.checkedTodo.filter(item => item !== action.payload);

        if (state.isDone) {
          state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }

      } else {
        state.checkedTodo.push(action.payload);
      }

      state.todos.concat(state.allTodos).map(todo => {
        const isCompleted = state.checkedTodo.includes(todo.id);

        return isCompleted ? todo.completed = true : todo.completed = false;
      });

      state.todos.sort((a, _b) => a.completed ? 1 : -1);
      state.allTodos.sort((a, _b) => a.completed ? 1 : -1);
    },
    getDoneTodos: (state) => {
      state.isDone = true;
      state.isAll = false;

      state.todos = state.todos.filter(todo => todo.completed);
    },
    getAllTodos: (state) => {
      state.isAll = true;
      state.isDone = false;
      state.todos = state.allTodos;
    },
    removeTodo: (state, action:PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.allTodos = state.allTodos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const {
  getTodos,
  getChecked,
  getDoneTodos,
  getAllTodos,
  removeTodo,
} = todosSlice.actions

export default todosSlice.reducer
