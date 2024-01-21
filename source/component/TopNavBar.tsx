import { FC } from 'web-cell';
import {
    NavLink,
    NavLinkProps,
    OffcanvasNavbar,
    OffcanvasNavbarProps
} from 'boot-cell';

export interface TopNavBarProps extends OffcanvasNavbarProps {
    menu?: NavLinkProps[];
}

const OriginalURLPattern = /^(https?|#)/;

export const TopNavBar: FC<TopNavBarProps> = ({ menu, ...rest }) => (
    <OffcanvasNavbar
        variant="dark"
        expand="md"
        sticky="top"
        brand={
            <a className="text-light text-decoration-none" href="#">
                成都 Web 开发者大会
            </a>
        }
        {...rest}
    >
        {menu?.map(({ title, href, ...rest }) => (
            <NavLink
                className="m-3 my-md-0 mx-md-3"
                {...rest}
                href={OriginalURLPattern.test(href) ? href : `#${href}`}
                active={globalThis.location?.hash
                    .slice(1)
                    .startsWith(href + '')}
            >
                {title}
            </NavLink>
        ))}
    </OffcanvasNavbar>
);
