import React, { FC, DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

export const Paragraph: FC<IParagraph> = ({ children }) => {
    return (
        <p>{children}</p>
    )
}


interface IParagraph extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {

}