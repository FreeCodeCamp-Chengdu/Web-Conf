import { Image } from 'boot-cell';
import { FC, WebCellProps } from 'web-cell';

import { logos } from './data';

export type LogoListProps = (typeof logos)[0] & WebCellProps<HTMLDivElement>;

export const LogoList: FC<LogoListProps> = ({ title, childrens, ...props }) => (
    <section {...props}>
        <h2 className="mt-5 mb-4">
            <span>{title}</span>
        </h2>
        <ul className="list-inline">
            {childrens.map(({ url, img }) => (
                <li key={img} className="list-inline-item m-2">
                    <a
                        className="d-inline-flex justify-content-center align-items-center shadow"
                        href={url}
                    >
                        <Image fluid className="mh-100" src={img} />
                    </a>
                </li>
            ))}
        </ul>
    </section>
);
