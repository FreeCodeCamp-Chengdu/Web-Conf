import { createCell } from 'web-cell';
import classNames from 'classnames';
import { Card } from 'boot-cell/source/Card';

import style from './TopicGroup.less';

interface Mentor {
    id: number;
    name: string;
}

export interface Topic {
    type: string;
    title: string;
    date: string;
    image: string;
    mentorId: number;
}

export function TopicGroup({
    topics,
    mentors
}: {
    topics: Topic[];
    mentors: Mentor[];
}) {
    return (
        <section>
            <h3 className="text-center mt-4">{topics[0].date}</h3>

            <div className="card-deck justify-content-center">
                {topics.map(({ title, image, mentorId, date }) => {
                    const mentor = mentors.find(({ id }) => id === mentorId)!;

                    return (
                        <Card
                            className={classNames(style.card, 'mt-4')}
                            direction="horizontal"
                            title={title}
                            image={image}
                            text={
                                <a href={'mentor/' + mentor.id}>
                                    {mentor.name}
                                </a>
                            }
                        >
                            <time>{date}</time>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
