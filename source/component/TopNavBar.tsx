import { createCell } from 'web-cell';
import { NavBarProps, NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLinkProps, NavLink } from 'boot-cell/source/Navigator/Nav';

import { history } from '../model';

export interface TopNavBarProps extends NavBarProps {
    menu?: NavLinkProps[];
}

export function TopNavBar({ menu, ...rest }: TopNavBarProps) {
    return (
        <NavBar
            key={history.path.split('/')[0]}
            expand="md"
            theme="dark"
            background="dark"
            brand="成都 Web 开发者大会"
            {...rest}
        >
            {menu?.map(({ title, href, ...rest }) => (
                <NavLink
                    {...rest}
                    href={href}
                    active={history.path.startsWith(href + '')}
                >
                    {title}
                </NavLink>
            ))}
        </NavBar>
    );
}
