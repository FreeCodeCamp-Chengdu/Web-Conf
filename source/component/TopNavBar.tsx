import { FC, observer } from 'web-cell';
import {
    NavLink,
    NavLinkProps,
    OffcanvasNavbar,
    OffcanvasNavbarProps
} from 'boot-cell';

import { i18n, LanguageName } from '../i18n';

export interface TopNavBarProps extends OffcanvasNavbarProps {
    menu?: NavLinkProps[];
}

const OriginalURLPattern = /^(https?|#)/;

const { t } = i18n;

export const TopNavBar: FC<TopNavBarProps> = observer(
    ({ menu = [], ...rest }) => (
        <OffcanvasNavbar
            variant="dark"
            expand="md"
            sticky="top"
            brand={
                <a className="text-light text-decoration-none" href="#">
                    {t('chengdu_web_developer_summit')}
                </a>
            }
            {...rest}
        >
            {menu?.map(({ title, href, ...restLinkProps }) => (
                <NavLink
                    className="m-3 my-md-0 mx-md-3 align-self-center"
                    {...restLinkProps}
                    href={OriginalURLPattern.test(href) ? href : `#${href}`}
                    active={globalThis.location?.hash
                        ?.slice(1)
                        .startsWith(href + '')}
                >
                    {title}
                </NavLink>
            ))}
            <select
                className="form-control w-auto ms-auto"
                value={i18n.currentLanguage}
                onChange={({ currentTarget }) =>
                    i18n.changeLanguage(
                        (currentTarget as HTMLSelectElement)
                            .value as typeof i18n.currentLanguage
                    )
                }
            >
                {Object.entries(LanguageName).map(([code, name]) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </OffcanvasNavbar>
    )
);
