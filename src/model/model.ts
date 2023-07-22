export interface TodosDto {
  readonly id: string,
  text: string,
  completed: boolean,
}

export interface InitialStateDto {
  todos: TodosDto[];
  allTodos: TodosDto[];
  checkedTodo: string[];
  isDone: boolean;
  isAll: boolean;
}
