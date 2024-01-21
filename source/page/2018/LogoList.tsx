import { FC } from 'web-cell';

type Logo = Record<'name' | 'URL' | 'path', string>;

export const LogoList: FC<{ member: Logo[] }> = ({ member }) => (
    <div className="d-flex justify-content-around align-content-center flex-wrap">
        {member.map(({ URL, name, path }) => (
            <a key={path} target="_blank" href={URL}>
                <img
                    className="py-3 px-1 flex-grow-0 flex-shrink-0"
                    title={name}
                    src={path}
                    style={{ width: '210px' }}
                />
            </a>
        ))}
    </div>
);
