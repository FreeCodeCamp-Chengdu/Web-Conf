import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Jumbotron
} from 'boot-cell';
import { PageProps } from 'cell-router';
import { FC, observer } from 'web-cell';

import { TopNavBar } from '../component/TopNavBar';
import { i18n } from '../i18n';
import * as style from './Home.module.less';
import { common_menu, summits } from './data';

const { t } = i18n;

export const HomePage: FC<PageProps> = observer(props => (
    <div {...props}>
        <TopNavBar menu={common_menu} />

        <Jumbotron
            fluid
            className="text-center"
            title="成都 Web 开发者大会"
            description="中国西南地区 Web、JavaScript 全栈开发者的年度盛会"
        >
            <Button
                className="m-2"
                variant="primary"
                href={summits[0].URL}
                title={summits[0].title}
            >
                报名最新大会
            </Button>
            <Button
                className="m-2"
                variant="secondary"
                href={summits[1].URL}
                title={summits[1].title}
            >
                回顾上次大会
            </Button>
        </Jumbotron>

        <section className="container py-5">
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {summits.map(({ title, banner, date, URL }) => {
                    const passed = new Date(date) < new Date();

                    return (
                        <Card className={`${style.card} shadow`}>
                            <CardImg src={banner} />

                            <CardBody className="d-flex flex-column">
                                <CardTitle className="flex-fill">
                                    {title}
                                </CardTitle>

                                <div className="d-flex justify-content-between align-items-center">
                                    <Button
                                        variant={
                                            passed ? 'secondary' : 'primary'
                                        }
                                        size="sm"
                                        className="stretched-link"
                                        href={`#${URL}`}
                                        title={title}
                                    >
                                        {t(passed ? 'review' : 'register')}
                                    </Button>

                                    <small className="text-muted">{date}</small>
                                </div>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        </section>
    </div>
));
