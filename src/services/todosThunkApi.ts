import { createAsyncThunk } from "@reduxjs/toolkit"
import { ITodo } from "../components/Todo/Todo.props"


export const todosThunkApi = createAsyncThunk(
    'users/fetchByIdStatus',
    async (todos: ITodo[]) => {
        await fetch('url', {
            body: JSON.stringify(todos),
            method: 'POST',
        })
    }
)