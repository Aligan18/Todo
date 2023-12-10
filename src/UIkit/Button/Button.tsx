import React, { FC, DetailedHTMLProps, HtmlHTMLAttributes, ButtonHTMLAttributes, forwardRef, ForwardedRef } from 'react'
import cn from 'classnames'
import classes from './Button.module.scss'

export const Button = forwardRef(({ size = 'medium', children, styleClass, ...props }: IButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
        <button ref={ref} className={cn(classes.button, [styleClass], {
            [classes.small]: size === 'small',
            [classes.medium]: size === 'medium',

        })} {...props}>{children}</button>
    )
})


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleClass?: string
    size?: 'small' | 'medium'
}