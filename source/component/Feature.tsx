import { WebCellElement, createCell } from 'web-cell';
import classNames from 'classnames';
import { Image } from 'boot-cell/source/Media/Image';

import style from './Feature.less';

export interface FeatureProps {
    reverse?: boolean;
    title: WebCellElement;
    summary: WebCellElement;
    logo: string;
}

export function Feature({ reverse, title, summary, logo }: FeatureProps) {
    return (
        <div className="row">
            <div className={classNames('col-md-8', reverse && 'order-md-2')}>
                <h2 className={style.heading}>{title}</h2>
                <p className="lead">{summary}</p>
            </div>
            <div className={classNames('col-md-4', reverse && 'order-md-1')}>
                <Image fluid className="w-100" src={logo} />
            </div>
        </div>
    );
}
