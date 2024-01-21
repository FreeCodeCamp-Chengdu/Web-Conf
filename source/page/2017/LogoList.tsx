import { FC } from 'web-cell';

import { logos } from './data';

export const LogoList: FC<(typeof logos)[0]> = ({ title, childrens }) => (
    <section>
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
                        <img className="mw-100 mh-100" src={img} />
                    </a>
                </li>
            ))}
        </ul>
    </section>
);
