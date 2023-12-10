import React, { FC, DetailedHTMLProps, HtmlHTMLAttributes } from 'react'
import classes from './ErrorText.module.scss'

export const ErrorText: FC<IErrorTextProps> = ({ children }) => {
    return (
        <p className={classes.error}>{children}</p>
    )
}

interface IErrorTextProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    styleClass?: string
}



