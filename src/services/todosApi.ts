
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ITodo } from '../components/Todo/Todo.props'


export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({

    sendCompletedTodo: builder.mutation<ITodo[], ITodo[]>({
      query: (tasks) => ({
        url: "task/completed/",
        method: "POST",
        body: tasks,
      }),
      invalidatesTags: ['Todo']
    }),


  }),
});


export const {
  useSendCompletedTodoMutation
} = todosApi;
