import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib';
import classes from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear'
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: ButtonTheme
}

export const Button: FC<IProps> = (props) => {
	const {
		className, theme, children, ...rest
	} = props;

	return (
		<button
			className={classNames(classes.button, {}, [className, classes[theme]])}
			type="button"
			{...rest}
		>
			{children}
		</button>
	);
};
