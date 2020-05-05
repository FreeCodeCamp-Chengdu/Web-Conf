import { createCell } from 'web-cell';

import { logos } from './data';

export function LogoList({ title, childrens }: typeof logos[0]) {
    return (
        <section>
            <h2 className="mt-5 mb-4">
                <span>{title}</span>
            </h2>
            <ul className="list-inline">
                {childrens.map(({ url, img }) => (
                    <li className="list-inline-item m-2">
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
}
