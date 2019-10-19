import { createCell } from 'web-cell';
import { NavBar } from 'boot-cell/source/NavBar';
import { Card } from 'boot-cell/source/Card';

import { TopicGroup, Topic } from './TopicGroup';
import style from './index.less';
import data from './index.json';

export function Page2019() {
    const splitByDay = data.topics.reduce((date, item) => {
        (date[item.date] = date[item.date] || []).push(item);

        return date;
    }, {});

    return (
        <main>
            <NavBar
                title="2019 成都 Web 全栈大会"
                theme="light"
                background="light"
            />
            <div className="container mt-5 pt-5">
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
            </div>
        </main>
    );
}
