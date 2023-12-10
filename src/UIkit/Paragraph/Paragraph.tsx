import React, { FC, DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

export const Paragraph: FC<IParagraph> = ({ children, styleClass }) => {
    return (
        <p className={styleClass}>{children}</p>
    )
}


interface IParagraph extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    styleClass?: string
}