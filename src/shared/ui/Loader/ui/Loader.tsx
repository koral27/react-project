import { FC } from 'react';

import './Loader.scss';
import { classNames } from 'shared/lib';

interface IProps {
  className?: string;
}

export const Loader: FC<IProps> = ({ className }) => {
	return (
		<div className={classNames('lds-default', {}, [className])}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
