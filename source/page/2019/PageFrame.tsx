import { FC, PropsWithChildren } from 'web-cell';

import { TopNavBar } from '../../component';
import { title, menu } from './data/index.json';

export const PageFrame: FC<PropsWithChildren> = ({ children }) => (
    <>
        <TopNavBar brand={title} variant="light" menu={menu} />

        <main className="container">{children}</main>
    </>
);
