import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ETodoStatus, ITodo } from '../../components/Todo/Todo.props'
import { todosThunkApi } from '../../services/todosThunkApi'



const initialState: ITodo[] = [
    { id: 1, description: "Lorem Ipsum is simply dummy text of.", title: "Wake up", status: ETodoStatus.COMPLETED },
    { id: 2, description: "Lorem Ipsum is simply dummy text of.", title: "Workout", status: ETodoStatus.IN_WORK },
    { id: 3, description: "Lorem Ipsum is simply dummy text of.", title: "Breakfast", status: ETodoStatus.WAITING },
]

export const counterSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        addTodoAction: (state, action: PayloadAction<ITodo>) => {
            state.push(action.payload)
        },

        setStatusAction: (state, action: PayloadAction<{ id: number, newStatus: ETodoStatus }>) => {
            const indexPost = state.findIndex((todo) => todo.id === action.payload.id)
            state[indexPost].status = action.payload.newStatus
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(todosThunkApi.fulfilled, (state, action) => {
                // обработка успешного выполнения 
            })
            .addCase(todosThunkApi.rejected, (state, action) => {
                // обработка ошибки
            })
            .addCase(todosThunkApi.pending, (state, action) => {
                // обработка загрузки 
            })
    },
})


export const { addTodoAction, setStatusAction } = counterSlice.actions

export default counterSlice.reducer