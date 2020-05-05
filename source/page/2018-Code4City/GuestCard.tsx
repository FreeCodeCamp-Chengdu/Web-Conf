import { createCell } from 'web-cell';

import style from './index.less';
import { vips } from './data';

export function GuestCard({
    avatar,
    name,
    role,
    identity,
    describe
}: typeof vips[0]) {
    return (
        <div className="col-md-6 col-xs-12">
            <div className={style.guest}>
                <div
                    className={style['guest-avatar']}
                    style={{
                        backgroundImage: `url('${avatar}')`
                    }}
                />
                <div className={style['guest-title']}>
                    <h5 className="guest-name text-white">{name}</h5>
                    <span className={style['guest-role']}>{role}</span>
                    <div className={style['guest-identity']}>{identity}</div>
                </div>
                <div className={style['guest-describe']}>{describe}</div>
            </div>
        </div>
    );
}
