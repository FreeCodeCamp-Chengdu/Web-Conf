import { FC, WebCellProps } from 'web-cell';

import { TopNavBar } from '../../component/TopNavBar';
import { title, menu } from './data/index.json';

export const PageFrame: FC<WebCellProps<HTMLDivElement>> = ({
    children,
    ...props
}) => (
    <div {...props}>
        <TopNavBar brand={title} variant="light" menu={menu} />

        <main className="container">{children}</main>
    </div>
);
