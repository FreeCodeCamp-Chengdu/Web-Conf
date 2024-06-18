import groupBy from 'lodash.groupby';
import { Jumbotron, Button, Tab, Tabs, Ratio, CountDown } from 'boot-cell';
import { Card, CardBody, CardImg, CardTitle } from 'boot-cell';

import { PageFrame } from './PageFrame';
import { TopicGroup, Topic } from './TopicGroup';
import { PartnerGroup } from './PartnerGroup';

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

export default () => (
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
                variant="danger"
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
        <Tabs
        // mode="pills" tabAlign="center"
        >
            {topicGroups.map(([title, list]) => (
                <Tab caption={title}>
                    <TopicGroup
                        topics={list as Topic[]}
                        mentors={data.mentors}
                    />
                </Tab>
            ))}
        </Tabs>
        <hr className="m-5" />

        <h2 className="text-center" id="Mentor">
            大咖讲师
        </h2>
        <p className="lead text-center">（排名不分先后）</p>

        <section className="row cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            {data.mentors.map(
                ({ name, avatar, organization, title, GitHub }) => (
                    <div key={name} className="col">
                        <Card className="shadow-sm" id={GitHub}>
                            <CardImg src={avatar} />
                            <CardBody>
                                <CardTitle>{name}</CardTitle>
                                {organization
                                    ? `${organization} - ${title}`
                                    : title}
                                <a
                                    className="stretched-link"
                                    target="_blank"
                                    href={'https://github.com/' + GitHub}
                                >
                                    @{GitHub}
                                </a>
                            </CardBody>
                        </Card>
                    </div>
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
        <Ratio aspectRatio="21x9">
            <iframe
                loading="lazy"
                src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.06309,30.538734&name=${data.title}`}
            />
        </Ratio>
        <hr className="m-5" />

        <h2 className="text-center">报名通道</h2>
        <img
            className="d-block mx-auto my-5"
            style={{ width: '20rem' }}
            src={BuyCode}
        />
    </PageFrame>
);
//
