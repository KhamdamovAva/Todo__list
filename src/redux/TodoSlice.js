import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  searchTerm: ''
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload });
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  }
});

export const { addTodo, setSearchTerm, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
