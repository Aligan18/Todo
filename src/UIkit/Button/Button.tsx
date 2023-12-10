import React, { FC, DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

export const Button: FC<IButton> = ({ children }) => {
    return (
        <button>{children}</button>
    )
}


interface IButton extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}