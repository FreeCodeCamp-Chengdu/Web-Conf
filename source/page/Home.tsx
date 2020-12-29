import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';
import { Card } from 'boot-cell/source/Content/Card';

import { TopNavBar } from '../component';
import { i18nTextOf } from '../i18n';
import style from './Home.less';
import { common_menu, summits } from './data';

export function HomePage() {
    return (
        <>
            <TopNavBar menu={common_menu} />

            <Jumbotron
                fluid
                className="text-center"
                title="成都 Web 开发者大会"
                description="中国西南地区 Web、JavaScript 全栈开发者的年度盛会"
            >
                <Button
                    className="m-2"
                    color="primary"
                    href={summits[0].URL}
                    title={summits[0].title}
                >
                    报名最新大会
                </Button>
                <Button
                    className="m-2"
                    color="secondary"
                    href={summits[1].URL}
                    title={summits[1].title}
                >
                    回顾上次大会
                </Button>
            </Jumbotron>

            <section className="container py-5">
                <div className="card-deck flex-wrap justify-content-center">
                    {summits.map(({ title, banner, date, URL }) => {
                        const passed = new Date(date) < new Date();

                        return (
                            <Card
                                className={`${style.card} shadow mb-4`}
                                title={title}
                                image={banner}
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <Button
                                        color={passed ? 'secondary' : 'primary'}
                                        size="sm"
                                        className="stretched-link"
                                        href={URL}
                                        title={title}
                                    >
                                        {i18nTextOf(
                                            passed ? 'review' : 'register'
                                        )}
                                    </Button>

                                    <small className="text-muted">{date}</small>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
