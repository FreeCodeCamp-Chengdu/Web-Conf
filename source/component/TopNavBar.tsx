import { createCell } from 'web-cell';
import { NavBarProps, NavBar } from 'boot-cell/source/Navigator/NavBar';

import { history } from '../model';

export function TopNavBar({ menu, ...rest }: NavBarProps) {
    return (
        <NavBar
            key={history.path.split('/')[0]}
            brand="成都 Web 开发者大会"
            menu={menu}
            activeIndex={menu?.findIndex(({ href }) =>
                history.path.startsWith(href as string)
            )}
            {...rest}
        />
    );
}
