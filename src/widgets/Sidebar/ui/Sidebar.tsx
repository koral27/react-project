import {FC, useState} from 'react';

import {classNames} from "shared/lib";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import classes from './Sidebar.module.scss';
import {LangSwitcher} from "features/LangSwitcher";

interface IProps {
    className?: string;
}

export const Sidebar: FC<IProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className={classNames(classes.sidebar, {[classes.collapsed]: collapsed}, [className])}>
            <button onClick={handleToggle}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
