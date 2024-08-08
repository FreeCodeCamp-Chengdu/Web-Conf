import { component, attribute, reaction, observer } from 'web-cell';
import { observable } from 'mobx';
import { CustomElement, formatDate } from 'web-utility';
import { MonthCalendar, SpinnerBox } from 'boot-cell';
import { Card, CardBody, CardImg, CardTitle } from 'boot-cell';

import { TopNavBar } from '../component/TopNavBar';
import * as style from '../component/SummitCard.module.less';
import { common_menu } from './data';
import { activity, Activity } from '../model';

@component({ tagName: 'activity-page' })
@observer
export default class ActivityPage extends HTMLElement implements CustomElement {
    @attribute
    @observable
    accessor date = new Date();

    @reaction(({ date }) => date)
    connectedCallback() {
        activity.getDayList(this.date);
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
            { downloading, list } = activity;

        return (
            <>
                <TopNavBar menu={common_menu()} />

                <h1 className="text-center my-5">全国 IT 活动</h1>

                <MonthCalendar
                    className="d-block container"
                    // @ts-ignore
                    onChange={({ detail }) => (this.date = detail)}
                />
                <SpinnerBox
                    className="container d-flex mx-auto flex-wrap justify-content-center"
                    cover={downloading > 0}
                >
                    {list[0]
                        ? this.renderCards(list)
                        : `${formatDate(date, 'YYYY 年 M 月 D 日')}没有活动`}
                </SpinnerBox>
            </>
        );
    }
}
