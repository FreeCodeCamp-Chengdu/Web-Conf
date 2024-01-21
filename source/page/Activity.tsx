import { WebCell, component, attribute, reaction, observer } from 'web-cell';
import { observable } from 'mobx';
import { formatDate } from 'web-utility';
import {
    MonthCalendar,
    SpinnerBox,
    Card,
    CardBody,
    CardImg,
    CardTitle
} from 'boot-cell';

import { TopNavBar } from '../component';
import * as style from './Home.module.less';
import { common_menu } from './data';
import { activity, Activity } from '../model';

export interface ActivityPage extends WebCell {}

@component({ tagName: 'activity-page' })
@observer
export class ActivityPage extends HTMLElement implements WebCell {
    @attribute
    @observable
    accessor date = new Date();

    @reaction(({ date }) => date)
    handleDate(date: Date) {
        activity.getDayList(date);
    }

    renderCards(list: Activity[]) {
        return list.map(({ banner, link, title, start, end, address }) => (
            <Card className={`${style.card} shadow mb-4`}>
                <CardImg src={banner} />
                <CardBody>
                    <CardTitle>
                        <a
                            className="stretched-link"
                            target="_blank"
                            href={link}
                        >
                            {title}
                        </a>
                    </CardTitle>
                    <ul className="list-unstyled">
                        <li>开始：{formatDate(start)}</li>
                        <li>结束：{formatDate(end)}</li>
                        <li>地点：{address}</li>
                    </ul>
                </CardBody>
            </Card>
        ));
    }

    render() {
        const { date } = this,
            { loading, list } = activity;

        return (
            <>
                <TopNavBar menu={common_menu} />

                <h1 className="text-center my-5">全国 IT 活动</h1>

                <MonthCalendar
                    className="d-block container"
                    // @ts-ignore
                    onChange={({ detail }) => (this.date = detail)}
                />
                <SpinnerBox
                    className="container card-deck mx-auto flex-wrap justify-content-center"
                    cover={loading}
                >
                    {list[0]
                        ? this.renderCards(list)
                        : `${formatDate(date, 'YYYY 年 M 月 D 日')}没有活动`}
                </SpinnerBox>
            </>
        );
    }
}
