import { component, createCell } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { HTMLRouter, matchRoutes } from 'cell-router/source';

import { history } from '../model';

import { PageEntry } from './PageEntry';
import { Page2017 } from './2017';
import { Page2018 } from './2018';
import { Page2019 } from './2019';
import { PageAccount } from './2019/PageAccount';

@observer
@component({
    tagName: 'page-router',
    renderTarget: 'children'
})
export class PageRouter extends HTMLRouter {
    protected history = history;

    render() {
        return (
            <div>
                {matchRoutes(
                    [
                        { paths: ['2017'], component: Page2017 },
                        { paths: ['2018'], component: Page2018 },
                        { paths: ['2019/accounts'], component: PageAccount },
                        { paths: ['2019'], component: Page2019 },
                        { paths: [''], component: PageEntry }
                    ],
                    history.path
                )}

                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#top">返回页顶</a>
                        </p>
                        <p>
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
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}
