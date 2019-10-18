import { createCell } from 'web-cell';
import { logo } from './image';

interface Logo {
    name: string;
    URL: string;
    path: string;
}

export function LogoList({ member }: { member: Logo[] }) {
    return (
        <div className="logos" data-view="member">
            {member.map(({ URL, name, path }) => (
                <a target="_blank" href={URL}>
                    <img title={name} src={path} />
                </a>
            ))}
        </div>
    );
}
