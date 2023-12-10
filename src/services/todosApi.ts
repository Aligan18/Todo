// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ITodos {
  id: number;
  title: string;
  author: string;
}
// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({

    completedTasks: builder.mutation<ITodos, ITodos>({
      query: (tasks) => ({
        url: "task/completed/",
        method: "POST",
        body: tasks,
      }),
      invalidatesTags: ['Todo']
    }),


  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCompletedTasksMutation,
} = todosApi;
