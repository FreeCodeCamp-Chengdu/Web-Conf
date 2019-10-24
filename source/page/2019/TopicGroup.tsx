import { createCell } from 'web-cell';
import { Card } from 'boot-cell/source/Content/Card';

import style from './TopicGroup.less';

interface Mentor {
    id: number;
    name: string;
    GitHub: string;
}

export interface Topic {
    type: string;
    title: string;
    date: string;
    time: string[];
    image: string;
    mentorId?: number;
}

export function TopicGroup({
    topics,
    mentors
}: {
    topics: Topic[];
    mentors: Mentor[];
}) {
    topics.sort((A, B) => A.time[0].localeCompare(B.time[0]));

    return (
        <section>
            <h3 className="text-center mt-4">{topics[0].date}</h3>

            <div className="card-deck justify-content-center">
                {topics.map(({ title, image, mentorId, time }) => {
                    const mentor =
                        mentorId && mentors.find(({ id }) => id === mentorId)!;

                    return (
                        <Card
                            className={style.topic}
                            direction="horizontal"
                            title={title}
                            image={image}
                            text={
                                mentor && (
                                    <a href={'#' + mentor.GitHub}>
                                        {mentor.name}
                                    </a>
                                )
                            }
                        >
                            <time>{time.join(' ~ ')}</time>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
