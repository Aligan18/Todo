import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './TodoSlice/slice'
import { todosApi } from "../services/todosApi";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [todosApi.reducerPath]: todosApi.reducer
  },

  middleware: (getMiddleware) => getMiddleware().concat(todosApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
