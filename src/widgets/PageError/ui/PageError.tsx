import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface IProps {
  className?: string;
}

export const PageError: FC<IProps> = ({ className }) => {
	const { t } = useTranslation();

	const handleReload = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(classes.pageError, {}, [className])}>
			{t('Что-то пошло не так')}
			<Button onClick={handleReload}>
				{t('Обновить страницу')}
			</Button>
		</div>
	);
};
