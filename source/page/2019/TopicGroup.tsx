import { FC } from 'web-cell';
import { Card, CardBody, CardImg, CardTitle } from 'boot-cell';

import * as style from './TopicGroup.module.less';

interface Mentor extends Record<'name' | 'GitHub', string> {
    id: number;
}

export interface Topic
    extends Record<'type' | 'title' | 'date' | 'image', string> {
    time: string[];
    mentorId?: number;
    slideshow?: string;
}

export interface TopicGroupProps {
    topics: Topic[];
    mentors: Mentor[];
}

export const TopicGroup: FC<TopicGroupProps> = ({ topics, mentors }) => (
    <div className="d-flex flex-wrap justify-content-center">
        {[...topics]
            .sort((A, B) => A.time[0].localeCompare(B.time[0]))
            .map(({ title, image, mentorId, slideshow, time }) => {
                const mentor =
                    mentorId && mentors.find(({ id }) => id === mentorId)!;

                return (
                    <Card className={style.topic} direction="row">
                        <CardImg src={image} />
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                            {mentor && (
                                <a href={'#' + mentor.GitHub}>{mentor.name}</a>
                            )}
                            <div className="d-flex justify-content-between">
                                <time>{time.join(' ~ ')}</time>
                                {slideshow && (
                                    <a target="_blank" href={slideshow}>
                                        演示文稿
                                    </a>
                                )}
                            </div>
                        </CardBody>
                    </Card>
                );
            })}
    </div>
);
