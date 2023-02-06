import { FC } from 'react';
import { Link, LinkProps } from "react-router-dom";
import classes from './AppLink.module.scss'
import {classNames} from "shared/lib";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRIMARY, ...rest} = props;

    return (
        <Link {...rest} to={to} className={classNames(classes.appLink, {}, [className, classes[theme]])}>
            {children}
        </Link>
    );
};
