import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib';
import classes from './LangSwitcher.module.scss';

interface IProps {
    className?: string;
}

export const LangSwitcher: FC<IProps> = ({ className }) => {
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage((i18n.language === 'ru' ? 'en' : 'ru'));
	};

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(classes.langSwitcher, {}, [className])}
			onClick={toggle}
		>
			{t('Язык')}
		</Button>
	);
};
