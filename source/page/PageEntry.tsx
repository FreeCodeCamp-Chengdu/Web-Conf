import { createCell } from 'web-cell';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { Button } from 'boot-cell/source/Form/Button';
import { Card } from 'boot-cell/source/Content/Card';

import style from './PageEntry.less';
import conf_list from './data';

export function PageEntry() {
    return (
        <main>
            <NavBar title="成都 Web 开发者大会" />

            <section className="jumbotron text-center py-5 mt-5">
                <div className="container">
                    <h1 className="font-weight-light">成都 Web 开发者大会</h1>
                    <p className="lead text-muted">
                        中国西南地区 Web、JavaScript 全栈开发者的年度盛会
                    </p>

                    <Button
                        className="m-2"
                        href={conf_list[0].URL}
                        title={conf_list[0].title}
                    >
                        报名最新大会
                    </Button>
                    <Button
                        kind="secondary"
                        className="m-2"
                        href={conf_list[1].URL}
                        title={conf_list[1].title}
                    >
                        回顾上次大会
                    </Button>
                </div>
            </section>

            <section className="container py-5">
                <div className="card-deck flex-wrap justify-content-center">
                    {conf_list.map(({ title, banner, date, URL }) => {
                        const passed = new Date(date) < new Date();

                        return (
                            <Card
                                className={`${style.card} shadow mb-4`}
                                title={title}
                                image={
                                    <img
                                        className={`card-img-top ${style.banner}`}
                                        src={banner}
                                    />
                                }
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a
                                            className={`btn btn-sm btn-${
                                                passed ? 'secondary' : 'primary'
                                            }`}
                                            href={URL}
                                            title={title}
                                        >
                                            {passed ? '回顾' : '报名'}
                                        </a>
                                    </div>
                                    <small className="text-muted">{date}</small>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
