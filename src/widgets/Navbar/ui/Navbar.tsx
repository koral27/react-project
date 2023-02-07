import {FC} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink";
import {classNames} from "shared/lib";
import classes from './Navbar.module.scss'

interface IProps {
    className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='about'>О сайте</AppLink>
            </div>
        </div>
    );
};
