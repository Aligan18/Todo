import { FC, DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from "react";
import { ETodoStatus } from "../../components/Todo/Todo.props";

import classes from './Toggle.module.scss'
import cn from 'classnames'
import { Paragraph } from "../Paragraph/Paragraph";

export function Toggle<T extends string>({ values, name, handleChange, selectedValue }: IToggle<T>) {




    return (<form className={classes.toggle_wrapper}>

        {values.map((value, index) =>
            <label key={value.value} className={cn(classes.lable, [],
                {
                    [classes.first_label]: index === 0,
                    [classes.last_label]: index === values.length - 1,
                    [classes.selected]: value.value === selectedValue
                })}>
                {value.title}
                <input onChange={(e) => handleChange(e)}
                    className={classes.input}
                    type="radio"
                    name={name}
                    value={value.value}
                    checked={selectedValue === value.value}
                />
            </label>
        )}

    </form>
    )
}


interface IToggle<T> extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    values: IToggleValue[]
    name: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    selectedValue: T

}


export interface IToggleValue {
    title: string
    value: string
}