import { FC } from 'web-cell';
import { Image } from 'boot-cell';

import * as style from './index.module.less';
import { vips } from './data';

export const GuestCard: FC<(typeof vips)[0]> = ({
    avatar,
    name,
    role,
    identity,
    describe
}) => (
    <div className="col-md-6 col-xs-12">
        <div className={style.guest}>
            <Image className={style['guest-avatar']} src={avatar} />

            <div className={style['guest-title']}>
                <h5 className="guest-name text-white">{name}</h5>
                <span className={style['guest-role']}>{role}</span>
                <div className={style['guest-identity']}>{identity}</div>
            </div>
            <div className={style['guest-describe']}>{describe}</div>
        </div>
    </div>
);
