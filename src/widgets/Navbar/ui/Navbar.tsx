import { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(classes.navbar, {}, [className])}>
			<div className={classes.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Главная')}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="about">{t('О сайте')}</AppLink>
			</div>
		</div>
	);
};
