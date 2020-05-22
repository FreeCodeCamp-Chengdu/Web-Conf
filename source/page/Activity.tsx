import {
    component,
    mixin,
    attribute,
    watch,
    createCell,
    Fragment
} from 'web-cell';
import classNames from 'classnames';
import { formatDate } from 'web-utility/source/date';
import { CalendarView } from 'boot-cell/source/Extra/Calendar';
import { Card } from 'boot-cell/source/Content/Card';

import { TopNavBar } from '../component';
import style from './PageEntry.less';
import { common_menu } from './data';
import { activity } from '../model';

interface ActivityPageProps {
    date?: string;
}

@component({
    tagName: 'activity-page',
    renderTarget: 'children'
})
export class ActivityPage extends mixin<ActivityPageProps>() {
    @attribute
    @watch
    set date(date: string) {
        this.setProps({ date }).then(() => activity.getDayList(new Date(date)));
    }

    connectedCallback() {
        if (!this.date) this.date = formatDate(new Date(), 'YYYY-MM-DD');

        super.connectedCallback!();
    }

    render({ date }: ActivityPageProps) {
        return (
            <Fragment>
                <TopNavBar menu={common_menu} />

                <CalendarView
                    className="d-block container"
                    date={date}
                    renderCell={(time: Date) => {
                        const current = formatDate(time, 'YYYY-MM-DD');

                        return (
                            <a
                                className={classNames(
                                    'stretched-link',
                                    date === current && 'text-white'
                                )}
                                href={'activity?date=' + current}
                                title={current + ' 的活动'}
                            >
                                {time.getDate()}
                            </a>
                        );
                    }}
                />
                <div className="container card-deck mx-auto flex-wrap justify-content-center">
                    {activity.list.map(
                        ({ banner, link, title, start, end, address }) => (
                            <Card
                                className={`${style.card} shadow mb-4`}
                                image={banner}
                                title={
                                    <a
                                        className="stretched-link"
                                        target="_blank"
                                        href={link}
                                    >
                                        {title}
                                    </a>
                                }
                            >
                                <ul className="list-unstyled">
                                    <li>开始：{formatDate(start)}</li>
                                    <li>结束：{formatDate(end)}</li>
                                    <li>地点：{address}</li>
                                </ul>
                            </Card>
                        )
                    )}
                </div>
            </Fragment>
        );
    }
}
