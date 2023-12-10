import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'

import classes from './Title.module.scss'

import cn from 'classnames'

export const Title = ({ styles, tag = 'medium', children, variation, ...props }: ITitleProps) => {
	const styleMod = {
		[classes.primary]: variation === 'primary',
	}

	switch (tag) {


		case 'large':
			return (
				<h1
					className={cn(classes.large, [styles, classes.cursor], styleMod)}
					{...props}
				>
					{children}
				</h1>
			)

		case 'medium':
			return (
				<h2
					className={cn(classes.medium, [styles, classes.cursor], styleMod)}
					{...props}
				>
					{children}
				</h2>
			)

		case 'small':
			return (
				<h3
					className={cn(classes.small, [styles, classes.cursor], styleMod)}
					{...props}
				>
					{children}
				</h3>
			)

		default:
			return <></>
	}
}

interface ITitleProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	styles?: string
	tag: 'large' | 'medium' | 'small'
	variation?: 'primary' | 'inverted-secondary'
}
