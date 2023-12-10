import { FC, DetailedHTMLProps, HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import classes from './TextInput.module.scss'

export const TextInput: FC<ITextInputProps> = ({ maxLength, ...props }) => {

    // @ts-ignore
    return (<input maxLength={maxLength} className={classes.input} type="text" {...props} />)
}

// неправильные типы для maxLengt, работает с string, но требует number
// @ts-ignore
interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    maxLength?: string;
}