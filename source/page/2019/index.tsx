import { createCell } from 'web-cell';
import { NavBar } from 'boot-cell/source/NavBar';
import { Card } from 'boot-cell/source/Card';
import { CountDown } from 'boot-cell/source/CountDown';

import { TopicGroup, Topic } from './TopicGroup';
import style from './index.less';
import data from './index.json';

export function Page2019() {
    const splitByDay = data.topics.reduce((date, item) => {
        (date[item.date] = date[item.date] || []).push(item);

        return date;
    }, {});

    return (
        <div>
            <NavBar title={data.title} theme="light" background="light" />
            <main className="container mt-5 pt-5">
                <header className="jumbotron text-center">
                    <h1>{data.title}</h1>

                    <ul className="list-unstyled my-4">
                        <li>2019 年 11 月 16 ~ 17 日</li>
                        <li>成都市高新区天府五街菁蓉国际广场 7 号楼主会场</li>
                    </ul>

                    <CountDown endTime="2019-11-16 09:00:00" />
                </header>

                <h2 className="text-center">大会议程</h2>

                {Object.values(splitByDay).map(list => (
                    <TopicGroup
                        topics={list as Topic[]}
                        mentors={data.mentors}
                    />
                ))}
                <hr className="m-5" />

                <h2 className="text-center">大咖讲师</h2>
                <p className="lead text-center">（排名不分先后）</p>

                <div className="card-columns">
                    {data.mentors.map(
                        ({ name, avatar, organization, title, GitHub }) => (
                            <Card
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
                </div>
                <hr className="m-5" />

                <h2 className="text-center">会场交通</h2>
                <iframe
                    className={style.map}
                    frameborder="0"
                    scrolling="no"
                    lazyload="1"
                    loading="lazy"
                    src={`//uri.amap.com/marker?src=fcc-cdc&callnative=1&position=104.06309,30.538734&name=${data.title}`}
                ></iframe>
            </main>
        </div>
    );
}
