import { FC } from 'web-cell';

interface Partner extends Record<'title' | 'name', string> {
    logo?: string;
}

export interface PartnerGroupProps {
    title: string;
    list: Partner[];
}

export const PartnerGroup: FC<PartnerGroupProps> = ({ title, list }) => (
    <>
        <h3 className="mt-4 mb-3">{title}</h3>

        <ul className="list-unstyled d-flex flex-wrap justify-content-around align-items-center">
            {list.map(({ name, logo }) => (
                <li className="m-3">
                    {logo ? (
                        <img
                            className="img-fluid"
                            style={{
                                maxWidth: '15rem',
                                maxHeight: '10rem'
                            }}
                            src={logo}
                            alt={name}
                        />
                    ) : (
                        name
                    )}
                </li>
            ))}
        </ul>
    </>
);
