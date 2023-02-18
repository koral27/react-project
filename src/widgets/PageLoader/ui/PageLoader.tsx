import { FC } from 'react';

import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

interface IProps {
  className?: string
}

export const PageLoader: FC<IProps> = ({ className }) => {
	return (
		<div className={classNames(classes.pageLoader, {}, [className])}>
			<Loader />
		</div>
	);
};
