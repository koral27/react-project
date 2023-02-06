import {ButtonHTMLAttributes, FC} from 'react';

import classes from './Button.module.scss';
import {classNames} from "shared/lib";

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme
}

export const Button: FC<IProps> = (props) => {
    const { className, theme, children, ...rest } = props;

    return (
        <button {...rest} className={classNames(classes.button, {}, [className, classes[theme]])}>
            {children}
        </button>
    );
};
