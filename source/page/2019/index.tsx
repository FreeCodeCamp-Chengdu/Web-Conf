import { createCell } from 'web-cell';
import { NavBar } from 'boot-cell/source/NavBar';

import { TopicGroup, Topic } from './TopicGroup';
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
            </div>
        </main>
    );
}
