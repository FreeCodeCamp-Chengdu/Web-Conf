import { component, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter } from 'cell-router/source';

import { history } from '../model';

import WeChat_QRC from '../image/FCC-CDG-WeChat.png';

import { PageEntry } from './PageEntry';
import { Page2017 } from './2017';
import { Code4City } from './2018-Code4City';
import { Page2018 } from './2018';
import { Page2019 } from './2019';
import { PageAccount } from './2019/PageAccount';
import { InvitationCard } from './2019/InvitationCard';
import { ActivityPage } from './Activity';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;
    protected routes = [
        { paths: [''], component: PageEntry },
        { paths: ['2017'], component: Page2017 },
        { paths: ['2018/Code4City'], component: Code4City },
        { paths: ['2018'], component: Page2018 },
        { paths: ['2019'], component: Page2019 },
        {
            paths: ['2019/invitation'],
            component: InvitationCard
        },
        { paths: ['2019/accounts'], component: PageAccount },
        { paths: ['activity'], component: ActivityPage }
    ];

    render() {
        return (
            <Fragment>
                {super.render()}

                <footer className="text-muted bg-light overflow-hidden mt-4">
                    <section className="container d-md-flex justify-content-between my-4">
                        <div>
                            <h4>关于我们</h4>
                            <p className="text-muted">
                                非营利组织 freeCodeCamp.org 自 2014
                                年成立以来，以“帮助人们免费学习编程”为使命，创建了大量免费的编程教程，包括交互式课程、视频课程、文章等。线下开发者社区遍布
                                160 多个国家、2000
                                多个城市。我们正在帮助全球数百万人学习编程，希望让世界上每个人都有机会获得免费的优质的编程教育资源，成为开发者或者运用编程去解决问题。
                            </p>
                            <p className="text-muted">
                                <a target="_blank" href="https://fcc-cd.dev/">
                                    freeCodeCamp 成都社区
                                </a>
                                成立于 2016 年，是中国大陆最早一批 FCC
                                城市线下社区，目前会员千余人，也是最大的 FCC
                                城市社区。在核心团队 20 余人两年的努力下，FCC
                                成都已覆盖
                                编程教育、技术招聘、行业大会等程序员全职业生涯的公益服务。
                            </p>
                        </div>
                        <div>
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
                    </section>
                    <section className="container d-flex flex-column flex-md-row align-items-center justify-content-around my-4">
                        <span>
                            自豪地使用
                            <a
                                className="px-1"
                                href="https://github.com/EasyWebApp/WebCell/tree/v2"
                            >
                                WebCell v2
                            </a>
                            &amp;
                            <a
                                className="px-1"
                                href="https://web-cell.dev/BootCell"
                            >
                                BootCell v1
                            </a>
                            开发
                        </span>
                        <a href="#top">返回页顶</a>
                    </section>
                </footer>
            </Fragment>
        );
    }
}
