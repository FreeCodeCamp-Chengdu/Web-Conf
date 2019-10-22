import { createCell } from 'web-cell';

interface Logo {
    name: string;
    URL: string;
    path: string;
}

export function LogoList({ member }: { member: Logo[] }) {
    return (
        <div className="d-flex justify-content-around align-content-center flex-wrap">
            {member.map(({ URL, name, path }) => (
                <a target="_blank" href={URL}>
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
}
