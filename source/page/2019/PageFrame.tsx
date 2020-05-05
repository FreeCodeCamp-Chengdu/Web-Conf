import { createCell, Fragment } from 'web-cell';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';

import { title, menu } from './data/index.json';

export function PageFrame({ defaultSlot }: { defaultSlot?: any[] }) {
    return (
        <Fragment>
            <NavBar
                title={title}
                theme="light"
                background="light"
                menu={menu}
            />
            <main className="container">{defaultSlot}</main>
        </Fragment>
    );
}
