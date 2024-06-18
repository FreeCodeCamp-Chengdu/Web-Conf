import { JsxChildren } from 'dom-renderer';
import { FC } from 'web-cell';
import classNames from 'classnames';
import { Image } from 'boot-cell';

import * as style from './Feature.module.less';

export interface FeatureProps extends Record<'title' | 'summary', JsxChildren> {
    reverse?: boolean;
    logo: string;
}

export const Feature: FC<FeatureProps> = ({
    reverse,
    title,
    summary,
    logo
}) => (
    <div className="row">
        <div className={classNames('col-md-8', reverse && 'order-md-2')}>
            <h2 className={style.heading}>{title}</h2>
            <p className="lead">{summary}</p>
        </div>
        <div className={classNames('col-md-4', reverse && 'order-md-1')}>
            <Image className="w-100" src={logo} />
        </div>
    </div>
);
