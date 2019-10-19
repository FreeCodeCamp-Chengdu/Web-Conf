import { createCell } from 'web-cell';
import { NavBar } from 'boot-cell/source/NavBar';
import { Card } from 'boot-cell/source/Card';

import WeChat_QRC from '../image/FCC-CDG-WeChat.png';
import conf_list from './data';

export function PageEntry() {
    return (
        <main>
            <NavBar title="成都 Web 开发者大会" />

            <section className="jumbotron text-center mt-5">
                <div className="container">
                    <h1 className="jumbotron-heading">成都 Web 开发者大会</h1>
                    <p className="lead text-muted">
                        中国西南地区 Web、JavaScript 全栈开发者的年度盛会
                    </p>
                    <p>
                        <a
                            className="btn btn-primary m-2"
                            href={conf_list[0].URL}
                            title={conf_list[0].title}
                        >
                            报名最新大会
                        </a>
                        <a
                            className="btn btn-secondary m-2"
                            href={conf_list[1].URL}
                            title={conf_list[1].title}
                        >
                            回顾上次大会
                        </a>
                    </p>
                </div>
            </section>

            <section className="album py-5">
                <div className="container">
                    <div className="row">
                        {conf_list.map(({ title, banner, date, URL }) => {
                            const passed = new Date(date) < new Date();

                            return (
                                <div className="col-md-4">
                                    <Card title={title} image={banner}>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <a
                                                    className={`btn btn-sm btn-${
                                                        passed
                                                            ? 'secondary'
                                                            : 'primary'
                                                    }`}
                                                    href={URL}
                                                    title={title}
                                                >
                                                    {passed ? '回顾' : '报名'}
                                                </a>
                                            </div>
                                            <small className="text-muted">
                                                {date}
                                            </small>
                                        </div>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">关于我们</h4>
                            <p className="text-muted">
                                freeCodeCamp 是由美国人 Quincy Larson
                                创立的公益在线编程学习平台，几年时间便发展成
                                GitHub 上 Star 最多的几大开源项目。
                            </p>
                            <p className="text-muted">
                                freeCodeCamp 成都社区成立于 2016
                                年，是中国大陆最早一批 FCC
                                城市线下社区，目前会员千余人，也是最大的 FCC
                                城市社区。在核心团队 20 余人两年的努力下，FCC
                                成都已覆盖
                                编程教育、技术招聘、行业大会等程序员全职业生涯的公益服务。
                            </p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4>联系我们</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.weibo.com/u/6165665516">
                                        新浪微博
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/FreeCodeCamp-Chengdu">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <img
                                        className="img-thumbnail w-75"
                                        src={WeChat_QRC}
                                        title="微信公众号"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
