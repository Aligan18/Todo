import { FC, useRef, MouseEventHandler, useEffect, useState } from 'react'
import { NoInfer } from 'react-redux'
import { Button } from '../../UIkit/Button/Button'
import { TextInput } from '../../UIkit/Input/TextInput'
import { Paragraph } from '../../UIkit/Paragraph/Paragraph'

import Portal from "../../UIkit/Portal/Portal"
import { ETodoStatus, ITodo } from '../Todo/Todo.props'
import classes from './AddTodoModal.module.scss'
import { stringValidation } from '../../helpers/stringValidation'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addTodoAction } from '../../store/TodoSlice/slice'


export const AddTodoModal: FC<IAddTodoModalProps> = ({ closeHandler }) => {

    const [error, setError] = useState(null)
    const dispatch = useAppDispatch()

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title: string = formData.get('title') as string;
        const description: string = formData.get('description') as string;

        if (stringValidation(title, 30) && stringValidation(description, 30)) {
            const newTodo: ITodo = {
                id: Math.floor(Math.random() * 1000),
                status: ETodoStatus.WAITING,
                description: description,
                title: title
            }

            dispatch(addTodoAction(newTodo))
            closeHandler(e)
        }
        else {
            setError("Все поля должны быть заполнены и значения не должны превышать 30 символов")
        }



    };

    return (
        <Portal>
            <div onClick={(e) => closeHandler(e)} className={classes.modal_wrapper}>
            </div>
            <form onSubmit={(e) => handleAddTodo(e)} className={classes.modal_form}>
                <div className={classes.label_wrapper}>
                    <label className={classes.modal_label}>
                        <span>Задача</span>
                        <TextInput maxLength={'30'} required={true} name='title' />
                    </label>
                    <label className={classes.modal_label}>
                        Описание
                        <TextInput maxLength={'30'} required={true} name='description' />
                    </label>

                    {error ? < Paragraph > {error}</Paragraph>
                        :
                        <div className={classes.help}>
                            < Paragraph styleClass={classes.help_text}>до 30 символов</Paragraph>
                        </div>
                    }
                </div>
                <Button type='submit' size={'small'}>Add Todo</Button>
            </form>
        </Portal >
    )
}

interface IAddTodoModalProps {
    closeHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.FormEvent<HTMLFormElement>) => void
}