import { FC } from 'web-cell';
import { PageProps } from 'cell-router';

import { TopNavBar } from '../../component';
import { title, menu } from './data/index.json';

export const PageFrame: FC<Partial<PageProps>> = ({ children, ...props }) => (
    <div {...props}>
        <TopNavBar brand={title} variant="light" menu={menu} />

        <main className="container">{children}</main>
    </div>
);
