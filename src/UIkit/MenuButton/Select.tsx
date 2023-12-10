import React, { FC, DetailedHTMLProps, DetailsHTMLAttributes, HtmlHTMLAttributes, SelectHTMLAttributes } from "react"

import classes from './Select.module.scss'
export const Select: FC<ISelectProps> = ({ values, ...props }) => {

    return (
        <select className={classes.select} {...props}>
            {values.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
    )

}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    values: string[];
}