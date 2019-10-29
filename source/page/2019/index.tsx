import groupBy from 'lodash.groupby';
import { createCell } from 'web-cell';
import { Button } from 'boot-cell/source/Form/Button';
import { Card } from 'boot-cell/source/Content/Card';
import { CountDown } from 'boot-cell/source/CountDown';
import { TabList } from 'boot-cell/source/Content/TabList';

import { PageFrame } from './PageFrame';
import { TopicGroup, Topic } from './TopicGroup';
import { PartnerGroup } from './PartnerGroup';
import style from './index.less';

import data from './data/index.json';
import BuyCode from './data/BuyCode.png';

const topicGroups = Object.entries(
    groupBy(data.topics, ({ date, place }) => `${date} ${place}`)
).sort(
    (A, B) =>
        A[1][0].date.localeCompare(B[1][0].date) ||
        B[1][0].place.localeCompare(A[1][0].place)
);

const partnerGroups = Object.entries(groupBy(data.partners, 'title'));

export function Page2019() {
    return (
        <PageFrame>
            <header className="jumbotron text-center">
                <h1>{data.title}</h1>

                <ul className="list-unstyled my-4">
                    <li>2019 年 11 月 16 ~ 17 日</li>
                    <li>{data.address}</li>
                </ul>

                <CountDown endTime="2019-11-16 09:00:00" />
                <Button
                    kind="danger"
                    size="lg"
                    className="mt-5"
                    href="http://fcc-chengdu.mikecrm.com/7pG2aOh"
                >
                    即刻报名
                </Button>
            </header>

            <h2 className="text-center my-4">大会议程</h2>
            <TabList
                mode="pills"
                tabAlign="center"
                list={topicGroups.map(([title, list], index) => ({
                    active: !index,
                    title,
                    content: (
                        <TopicGroup
                            topics={list as Topic[]}
                            mentors={data.mentors}
                        />
                    )
                }))}
            />
            <hr className="m-5" />

            <h2 className="text-center">大咖讲师</h2>
            <p className="lead text-center">（排名不分先后）</p>

            <section className="card-columns">
                {data.mentors.map(
                    ({ name, avatar, organization, title, GitHub }) => (
                        <Card
                            id={GitHub}
                            className={style.mentor}
                            title={name}
                            image={avatar}
                            text={
                                organization
                                    ? `${organization} - ${title}`
                                    : title
                            }
                        >
                            <a
                                target="_blank"
                                href={'https://github.com/' + GitHub}
                            >
                                @{GitHub}
                            </a>
                        </Card>
                    )
                )}
            </section>
            <hr className="m-5" />

            <h2 className="text-center">共创伙伴</h2>

            <section className="text-center">
                {partnerGroups.map(([title, list]) => (
                    <PartnerGroup title={title} list={list} />
                ))}
            </section>
            <hr className="m-5" />

            <h2 className="text-center">会场交通</h2>
            <p className="lead text-center mt-4 mb-5">{data.address}</p>
            <iframe
                className={style.map}
                frameborder="0"
                scrolling="no"
                lazyload="1"
                loading="lazy"
                src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.06309,30.538734&name=${data.title}`}
            ></iframe>
            <hr className="m-5" />

            <h2 className="text-center">报名通道</h2>
            <img
                className="d-block mx-auto my-5"
                src={BuyCode}
                style={{ width: '20rem' }}
            />
        </PageFrame>
    );
}
