import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: 1, text: "helloworld" }],
};

const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      console.log(todo.id);
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = todoslice.actions;
export default todoslice.reducer;
