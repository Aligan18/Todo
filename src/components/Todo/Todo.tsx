import React, { FC, FormEvent, ChangeEvent } from 'react'
import { Paragraph } from '../../UIkit/Paragraph/Paragraph'
import { Title } from '../../UIkit/Title/Title'
import { ITodo } from './Todo.props'
import { ETodoStatus } from '../../components/Todo/Todo.props'
import { Select } from '../../UIkit/MenuButton/Select'
import cn from 'classnames'
import classes from './Todo.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setStatusAction } from '../../store/TodoSlice/slice'

export const Todo: FC<ITodoProps> = ({ todo }) => {
    const dispatch = useAppDispatch()
    const values: ETodoStatus[] = [ETodoStatus.COMPLETED, ETodoStatus.IN_WORK, ETodoStatus.WAITING]

    const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>, todoId: number) => {

        if (Object.values(ETodoStatus).includes(e.target.value as ETodoStatus)) {
            dispatch(setStatusAction({ id: todoId, newStatus: e.target.value as ETodoStatus }))
        }
    }


    return (
        <section className={classes.todo_wrapper}>
            <div>
                <Title tag='medium'>{todo.title}</Title>
                <Paragraph>{todo.description}</Paragraph>
            </div>
            <div>
                <Select onChange={(e) => handleChangeStatus(e, todo.id)} defaultValue={todo.status}
                    values={values} />
            </div>
        </section>
    )
}

interface ITodoProps {
    todo: ITodo
}