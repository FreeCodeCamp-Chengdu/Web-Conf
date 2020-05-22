import { WebCellProps, createCell, Fragment } from 'web-cell';

import { TopNavBar } from '../../component';
import { title, menu } from './data/index.json';

export function PageFrame({ defaultSlot }: WebCellProps) {
    return (
        <Fragment>
            <TopNavBar
                brand={title}
                theme="light"
                background="light"
                menu={menu}
            />
            <main className="container">{defaultSlot}</main>
        </Fragment>
    );
}
