import groupBy from 'lodash.groupby';
import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';
import { Card } from 'boot-cell/source/Content/Card';
import { CountDown } from 'boot-cell/source/Calendar/CountDown';
import { TabView, TabPanel } from 'boot-cell/source/Content/TabView';
import { NavLink } from 'boot-cell/source/Navigator/Nav';
import { Embed } from 'boot-cell/source/Media/Embed';

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
            <Jumbotron
                className="text-center"
                title={data.title}
                description={
                    <ul className="list-unstyled my-4">
                        <li>2019 年 11 月 16 ~ 17 日</li>
                        <li>{data.address}</li>
                    </ul>
                }
            >
                <CountDown endTime="2019-11-16 09:00:00" />
                <Button
                    kind="danger"
                    size="lg"
                    className="mt-5"
                    href="http://fcc-chengdu.mikecrm.com/7pG2aOh"
                >
                    即刻报名
                </Button>
            </Jumbotron>

            <h2 className="text-center my-4" id="Topic">
                大会议程
            </h2>
            <TabView mode="pills" tabAlign="center">
                {topicGroups.map(([title, list]) => (
                    <Fragment>
                        <NavLink>{title}</NavLink>
                        <TabPanel>
                            <TopicGroup
                                topics={list as Topic[]}
                                mentors={data.mentors}
                            />
                        </TabPanel>
                    </Fragment>
                ))}
            </TabView>
            <hr className="m-5" />

            <h2 className="text-center" id="Mentor">
                大咖讲师
            </h2>
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
                                className="stretched-link"
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

            <h2 className="text-center" id="Contributor">
                共创伙伴
            </h2>
            <section className="text-center">
                {partnerGroups.map(([title, list]) => (
                    <PartnerGroup title={title} list={list} />
                ))}
            </section>
            <hr className="m-5" />

            <h2 className="text-center" id="Address">
                会场交通
            </h2>
            <p className="lead text-center mt-4 mb-5">{data.address}</p>
            <Embed
                is="iframe"
                className={style.map}
                src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.06309,30.538734&name=${data.title}`}
            />
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
