import { FC, useState } from 'react';

import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar: FC<IProps> = ({ className }) => {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}>
			<Button onClick={handleToggle}>toggle</Button>
			<div className={classes.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
