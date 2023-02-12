import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IProps> = (props) => {
	const {
		to, className, children, theme = AppLinkTheme.PRIMARY, ...rest
	} = props;

	return (
		<Link
			to={to}
			className={classNames(classes.appLink, {}, [className, classes[theme]])}
			{...rest}
		>
			{children}
		</Link>
	);
};
