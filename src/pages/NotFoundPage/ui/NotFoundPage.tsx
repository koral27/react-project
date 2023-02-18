import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import classes from './NotFoundPage.module.scss';

interface IProps {
  className?: string;
}

export const NotFoundPage: FC<IProps> = ({ className }) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(classes.notFoundPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	);
};
