import { MouseEventHandler, useState } from 'react'

import { Title } from '../UIkit/Title/Title'
import { Button } from '../UIkit/Button/Button'

import classes from './HomePage.module.scss'

import { Todo } from '../components/Todo/Todo'
import { ETodoStatus, ITodo, TSelectStatusValues } from '../components/Todo/Todo.props'
import { AddTodoModal } from '../components/AddTodoModal/AddTodoModal'
import { useAppSelector } from '../hooks/useAppSelector'
import { IToggleValue, Toggle } from '../UIkit/Toggle/Toggle'
import { useSendCompletedTodoMutation } from '../services/todosApi'
import { ErrorText } from '../UIkit/ErrorText/ErrorText'
import cn from 'classnames'


const values: IToggleValue[] = [
    { value: ETodoStatus.COMPLETED, title: "Выполненные" },
    { value: ETodoStatus.IN_WORK, title: "В работе" },
    { value: ETodoStatus.WAITING, title: "Ожидают" },
    { value: "Все", title: "Все" },
]

export const HomePage = () => {
    const [openAddTodoModal, setOpenAddTodoModal] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState<TSelectStatusValues>("Все")
    const [sendCompletedTodo, { error, isLoading }] = useSendCompletedTodoMutation()
    const allTodos = useAppSelector(state => state.todos)
    const filteredTodos = filterByStatus(allTodos, selectedStatus)

    const onlyCompletedTasks = filterOnlyCompletedTasks(allTodos)


    function filterOnlyCompletedTasks(todos: ITodo[]) {
        return todos.filter((todo) =>
            todo.status === ETodoStatus.COMPLETED
        )
    }

    function filterByStatus(todos: ITodo[], targetStatus: TSelectStatusValues) {
        if (Object.values(ETodoStatus).includes(targetStatus as ETodoStatus)) {
            return todos.filter((todo) =>
                todo.status === targetStatus
            )
        }
        return todos
    }

    const closeHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation()
        setOpenAddTodoModal(false)
    }

    const handleChangeSelectedStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        setSelectedStatus(e.target.value as ETodoStatus)
    }

    console.log(error)


    return (<div className={classes.layout}>

        <header className={classes.header}>
            <Title tag='large'>{`✔️Todo List   ${onlyCompletedTasks.length}`}</Title>

            <Toggle<TSelectStatusValues> values={values} name={'filter'} handleChange={handleChangeSelectedStatus} selectedValue={selectedStatus} />
        </header>
        <main className={classes.main}>
            <article className={classes.todos}>
                {filteredTodos.map((todo) =>
                    <Todo key={todo.id} todo={todo}></Todo>
                )}
            </article>

            <div className={classes.button_wrapper}>

                <Button onClick={() => setOpenAddTodoModal(true)} styleClass={classes.add_button}>Add Todo</Button>
                <Button onClick={() => sendCompletedTodo(onlyCompletedTasks)}>Send Todo </Button>
            </div>
            {error && 'error' in error && <div className={classes.error}><ErrorText>{error.error}</ErrorText></div>}

            {openAddTodoModal && <AddTodoModal closeHandler={closeHandler} />}
        </main>

        {isLoading && <div className={classes.loading}></div>}
    </div>)
}


