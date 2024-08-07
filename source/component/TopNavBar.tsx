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

import { i18n } from '../i18n';

const { t } = i18n;

export const TopNavBar: FC<TopNavBarProps> = ({ menu, ...rest }) => (
    <OffcanvasNavbar
        variant="dark"
        expand="md"
        sticky="top"
        brand={
            <a className="text-light text-decoration-none" href="#">
                {t('homePagetitle')}
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
