import { createCell, Fragment } from 'web-cell';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import data from './data/index.json';

export function PageFrame({ children }: { children?: any[] }) {
    return (
        <Fragment>
            <NavBar
                title={data.title}
                theme="light"
                background="light"
                menu={data.menu}
            />
            <main className="container mt-5 pt-5">{children}</main>
        </Fragment>
    );
}
