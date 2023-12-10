import { FC, DetailedHTMLProps, HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import classes from './TextInput.module.scss'

export const TextInput: FC<ITextInputProps> = ({ maxLength, ...props }) => {

    return (<input maxLength={maxLength} className={classes.input} type="text" {...props} />)
}

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    maxLength?: string;
}